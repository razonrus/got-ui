import pluralize from './utils/pluralize'
import objectEach from 'doremi/object/each'

class HousesStatsVisualizer {
    constructor() {
        this.data = []
    }

    showTo(el) {
        let html = '<div class=clearfix>';

        this.data.forEach(house => {
            html += `
                <div class='house-stat clearfix'>
                    <img class=house-stat__gerb src="gerbs/${house.name}.png"/>
                    <div class="house-stat__text">
                        <div class=house-stat__name>${house.name}</div>
                        <span class=house-stat__wins>${house.winsCount}</span>
                        <span class=house-stat__total>/${house.gamesCount}</span>
                    </div>
                </div>
            `
        })
        
        html += '</div>'
        
        el.innerHTML = html
    }
}

export default HousesStatsVisualizer
