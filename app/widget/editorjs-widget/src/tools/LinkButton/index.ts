import './index.css';

const toolboxIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>';

export default class LinkButton {
    api: any;
    config: any;
    data: any;
    nodes: any;

    static get toolbox() {
        return {
            title: 'Link Button',
            icon: toolboxIcon
        };
    }

    /**
     * Available colors
     *
     * @returns {{name: string, icon: string, title: string}[]}
     */
    static get tunes() {
        return [
            {
                name: 'green',
                icon: '<div class="cdx-button_tune-icon"></div>',
                title: 'Green',
            },
            {
                name: 'blue',
                icon: '<div class="cdx-button_tune-icon"></div>',
                title: 'Blue',
            },
            {
                name: 'red',
                icon: '<div class="cdx-button_tune-icon"></div>',
                title: 'Red',
            },
        ];
    }

    /**
     * CSS classes
     *
     * @returns {object}
     */
    get CSS() {
        return {
            linkInput: 'cdx-button_link-input',
            captionInput: 'cdx-button_caption-input',
            blockWrapper: 'cdx-button_block-wrapper',
            tuneWrapper: 'cdx-button_tune-wrapper',
            tuneButton: 'cdx-button_tune-button'
        };
    };

    /**
     * Constructor
     *
     * @param api - Editor.js API
     * @param data - previously saved data
     */
    constructor({ api, data, config }) {
        this.api = api;
        this.config = config || {};
        this.data = {
            url: data.url || '',
            caption: data.caption || ''
        };

        this.color = data.color || '';

        this.nodes = {
            linkInput: null,
            captionInput: null,
            tuneButtons: []
        };
    }

    get color() {
        return this.data.color;
    }

    /**
     * Set button color
     * @param {string} color
     */
    set color(color) {
        let tuneData = LinkButton.tunes.find(tune => tune.name === color);
        if (!tuneData) {
            this.data.color = LinkButton.tunes[0].name;
        } else {
            this.data.color = color;
        }
    }

    /**
     * Rendering inputs
     * @returns {HTMLDivElement}
     */
    render() {
        const wrapper = document.createElement('div');
        wrapper.classList.add(this.api.styles.block, this.CSS.blockWrapper);

        const linkInput = document.createElement('input');
        linkInput.placeholder = this.api.i18n.t('Link');
        linkInput.classList.add(this.api.styles.input, this.CSS.linkInput);
        linkInput.value = this.data.url;

        const captionInput = document.createElement('input');
        captionInput.placeholder = this.api.i18n.t('Caption');
        captionInput.classList.add(this.api.styles.input, this.CSS.captionInput);
        captionInput.value = this.data.caption;

        wrapper.appendChild(linkInput);
        wrapper.appendChild(captionInput);

        this.nodes.linkInput = linkInput;
        this.nodes.captionInput = captionInput;

        return wrapper;
    }

    renderSettings() {
        const wrapper = document.createElement('div');
        wrapper.classList.add(this.CSS.tuneWrapper);

        LinkButton.tunes.forEach(tune => {
            let button = document.createElement('div');

            button.classList.add(this.api.styles.settingsButton, this.CSS.tuneButton, this.CSS.tuneButton + '_' + tune.name);
            button.classList.toggle(this.api.styles.settingsButtonActive, this.data.color === tune.name);
            button.innerHTML = tune.icon;
            button.dataset.tune = tune.name;

            wrapper.appendChild(button);

            button.addEventListener('click', () => {
                this._toggleTune(tune.name);
            });
            this.nodes.tuneButtons.push(button);

            this.api.tooltip.onHover(button, tune.title, {
                placement: 'top',
            });
        });

        return wrapper;
    }

    _toggleTune(tuneName) {
        this.color = tuneName;
        this.nodes.tuneButtons.forEach(button => {
            button.classList.toggle(this.api.styles.settingsButtonActive, this.data.color === button.dataset.tune);
        });
    }

    /**
     * Save
     * @returns {{anchor: string} | undefined}
     */
    save() {
        this.data.url = this.nodes.linkInput?.value;
        this.data.caption = this.nodes.captionInput?.value;

        return this.data;
    }
}