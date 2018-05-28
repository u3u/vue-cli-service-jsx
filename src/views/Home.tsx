import Vue from 'vue';
import Comopnent from 'vue-class-component';
import HelloWorld from 'components/HelloWorld';

@Comopnent
export default class Home extends Vue {
  render() {
    return (
      <div class="home">
        {/* eslint-disable-next-line global-require */}
        <img src={require('../assets/logo.png')} />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    );
  }
}
