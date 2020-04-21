import React, { Component } from 'react';
import './style.css'


class PictureSelect extends Component {
    constructor(props) {
        super(props)
        this.itemChange = this.itemChange.bind(this)
        this.chooseAll = this.chooseAll.bind(this)
    }
    // 选择图片
    itemChange(e, item, index) {
        let checked = e.target.checked
        let newValue = [...this.props.value]
        if (checked) {
            newValue.push(item.id)
        } else {
            let findIndex = newValue.findIndex(find => find === item.id)
            findIndex>-1 && newValue.splice(findIndex, 1)
        }
        return this.props.onChange([...newValue])
    }
    // 全选/全不选
    chooseAll(e) {
        let checked = e.target.checked
        let newValue = this.props.value
        if (checked) {
            let arr = []
            this.props.pictures.map(item => {
                arr.push(item.id)
                return arr
            })
            newValue = arr
        } else {
            newValue = []
        }
        return this.props.onChange([...newValue])
    }
    render() {
        return (
            <div className='container'>
                <div className='chooseAll'>
                    <input type="checkbox" id="allChoose"
                        checked={this.props.value.length===this.props.pictures.length}
                        onChange={this.chooseAll} />
                     
                    <label htmlFor="allChoose"></label>
                    <span>已选中{this.props.value.length}个文件</span>
                   
                </div>
                <div className='checkboxGroup'>
                    {
                        this.props.pictures.map((item,index) => {
                            return (
                                <div key={item.id} className="item">
                                    <div className="item-checkbox">
                                        <input type="checkbox" name="picture" id={'checked'+item.id}
                                            checked={this.props.value.indexOf(item.id) !== -1 ? true : false}
                                            onChange={(e) => this.itemChange(e,item,index)} />
                                        <label htmlFor={'checked'+item.id}></label>
                                    </div>
                                    <div className="item-img">
                                        <img src={item.url} alt={item.name}/>
                                    </div>
                                    <div className="item-name">
                                        {item.name}
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        );
    }
}

export default PictureSelect;
