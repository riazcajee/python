    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'python:toggle': () => this.toggle()
    }));
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
