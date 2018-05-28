import Vue from 'vue';
import Component from 'vue-class-component';
import Home from 'views/Home';
import './App.scss';

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <Home />
      </div>
    );
  }
}
