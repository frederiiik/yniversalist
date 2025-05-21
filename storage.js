class StorageManager {
  constructor() {
    this.MAX_HISTORY_ITEMS = 5;
    this.MAX_FAVORITES = 10;
  }

  async getTheme() {
    const themeJson = localStorage.getItem('theme');
    return themeJson ? JSON.parse(themeJson) : 'light';
  }

  async saveTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  async getHistory() {
    const historyJson = localStorage.getItem('history');
    return historyJson ? JSON.parse(historyJson) : [];
  }

  async addHistoryEntry(entry) {
    const history = await this.getHistory();
    history.unshift(entry);
    const trimmedHistory = history.slice(0, this.MAX_HISTORY_ITEMS);
    localStorage.setItem('history', JSON.stringify(trimmedHistory));
    return trimmedHistory;
  }

  async clearHistory() {
    localStorage.setItem('history', JSON.stringify([]));
  }

  async getLastUsedSettings() {
    const lastUsedJson = localStorage.getItem('lastUsed');
    return lastUsedJson ? JSON.parse(lastUsedJson) : { language: '', style: '' };
  }

  async saveLastUsedSettings(settings) {
    localStorage.setItem('lastUsed', JSON.stringify(settings));
  }

  async getFavorites() {
    const favoritesJson = localStorage.getItem('favorites');
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  async addFavorite(favorite) {
    const favorites = await this.getFavorites();
    if (favorites.length >= this.MAX_FAVORITES) {
      throw new Error('Maximum number of favourites reached');
    }
    
    const isDuplicate = favorites.some(f => 
      f.language === favorite.language && f.style === favorite.style
    );
    if (isDuplicate) {
      throw new Error('This combination is already in favourites');
    }
    
    favorites.push(favorite);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return favorites;
  }

  async removeFavorite(language, style) {
    const favorites = await this.getFavorites();
    const updatedFavorites = favorites.filter(f => 
      !(f.language === language && f.style === style)
    );
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    return updatedFavorites;
  }

  async getAllData() {
    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      try {
        allData[key] = JSON.parse(value);
      } catch (e) {
        allData[key] = value;
      }
    }
    return allData;
  }
}

const storageManager = new StorageManager();
window.storageManager = storageManager;
