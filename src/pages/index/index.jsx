import Taro, {Component} from '@tarojs/taro'
import {ScrollView, View} from '@tarojs/components'
import {AtActivityIndicator, AtListItem, AtMessage} from 'taro-ui'
import './index.scss'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '首页'
    }

    constructor(props) {
        super(props)
        this.state = {
            itemArr: [
                {title: '1', info: 'info'},
                {title: '2', info: 'info'},
                {title: '3', info: 'info'},
                {title: '4', info: 'info'},
                {title: '5', info: 'info'},
                {title: '6', info: 'info'},
                {title: '7', info: 'info'},
                {title: '8', info: 'info'},
                {title: '9', info: 'info'},
                {title: '10', info: 'info'},
            ]
        }
    }

    scrollToLower = () => {
        let _index = this.state.itemArr.length
        let newArr = this.state.itemArr
        newArr.push({title: ++_index, info: 'info'})
        newArr.push({title: ++_index, info: 'info'})
        newArr.push({title: ++_index, info: 'info'})
        newArr.push({title: ++_index, info: 'info'})
        setTimeout(() => {
            this.setState(newArr)
        }, 3000)
    }

    scrollToUpper = () => {
        Taro.atMessage({
            'message': '下拉刷新',
            'type': 'info',
        })
    }


    render() {
        const Threshold = -100
        return (

            <ScrollView
                className='index'
                scrollY
                onScrollToLower={this.scrollToLower}
                upperThreshold={Threshold}
                onScrollToUpper={this.scrollToUpper}
            >
                <View>
                    <AtMessage/>
                </View>
                {
                    this.state.itemArr.map((item) => {
                        return (
                            <AtListItem title={item.title} note={item.info}/>
                        )
                    })
                }
                <View className='load'>
                    <AtActivityIndicator mode='center'></AtActivityIndicator>
                </View>
            </ScrollView>
        )
    }
}
