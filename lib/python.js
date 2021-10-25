'use babel';

import PythonView from './python-view';
import { CompositeDisposable } from 'atom';

export default {

  pythonView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.pythonView = new PythonView(state.pythonViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.pythonView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'python:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.pythonView.destroy();
  },

  serialize() {
    return {
      pythonViewState: this.pythonView.serialize()
    };
  },

  toggle() {
    console.log('Python was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
