
// 数据接口 只需更改myColumns数据，其他无需更改        myColumns['columns']：X轴数据标签  myColumns['data']：Y轴数据

function dataColumns() {
    myColumns = {};
    myColumns['columns'] = [
        '9:00', '9:05', '9:10', '9:15', '9:20', '9:25', '9:30', '9:35', '9:40', '9:45', '9:50', '9:55', '10:00',
        '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45', '10:50', '10:55', '11:00',
    ];
    myColumns['data'] = [12, 17, 15, 20, 23, 22, 25, 28, 24, 30, 25, 27, 32, 26, 31, 25, 31, 28, 36, 42, 38, 41, 44, 39, 44];   // 默认显示数据一
    // 按钮控件
    var arr = document.getElementsByTagName('button');
    for (var i = 0; i < arr.length; i++) {
        arr[i].onclick = function () {
            if (this.id == 'data_one') {
                myColumns['data'] = [12, 17, 15, 20, 23, 22, 25, 28, 24, 30, 25, 27, 32, 26, 31, 25, 31, 28, 36, 42, 38, 41, 44, 39, 44];   // 数据一
                draw(myColumns);
            } else if (this.id == 'data_two') {
                myColumns['data'] = [12, 17, 15, 20, 113, 22, 25, 28, 24, 30, 25, 27, 32, 26, 31, 25, 31, 28, 36, 42, 38, 41, 44, 39, 44];   // 数据二
                draw(myColumns);
            }
        };
    }
    console.log(myColumns);
    return myColumns;
}

myColumns = dataColumns();

function draw(myColumns) {

    let myChart = echarts.init(document.getElementById('new_line'));
    myChart.clear();

    // 指定图表的配置项和数据
    option = {
        backgroundColor: '#eee',
        title: {
            text: 'My Lines',
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    rotate: 30,
                },
                data: myColumns.columns,
                splitLine: {
                    show: true,

                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                },
                splitNumber: 10,   // 设置Y轴间隔
            }
        ],
        dataZoom: [
            {
                type: "inside",
            }
        ],
        series: [
            {
                name: '产品一',
                type: 'line',
                smooth: true,
                data: myColumns.data,
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option, true);
}

draw(myColumns);