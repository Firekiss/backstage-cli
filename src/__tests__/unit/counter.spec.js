import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'


describe('Counter.vue 组件测试', () => {
  let isCalled = false

  const wrapper = mount(Counter, {
    listeners: {
      change() {
        isCalled = true
      }
    }
  })

  it('renders counter html', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('count++', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
    expect(isCalled).toBe(true)
  })


})