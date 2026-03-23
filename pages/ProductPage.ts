import { Page, Locator } from '@playwright/test';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';

export class ProductPage {
    readonly page: Page;
    readonly header: Header;
    readonly sidebar: SideBar;
    readonly productTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.sidebar = new SideBar(page);
        this.productTitle = page.locator('.title');
    }

    async getProductTitle() {
        return await this.productTitle.textContent();
    }

    async logout() {
        await this.header.openMenu();
        await this.sidebar.logout();
    }
}

