<style>
    .design-img-boxs {
        max-width: 592px;
    }
    
    .design-img-good:after {
        background: #2d8cf0;
    }
    
    .design-img-error:after {
        background: #ed3f14;
    }
    
    .design-label-boxs {
        width: calc(~"100% - 592px");
        padding-right:16px;
    }
    
    .design-img {
        width: 100%;
    }
    
    .design-img-bg {
        background: #eee;
        padding: 16px;
        margin: 0px 8px;
        position: relative;
    }
    
    .design-img-bg:after {
        content: "";
        width: 100%;
        height: 3px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    
    .ivu-article .ivu-card img {
        height: auto;
    }
    
    .preview-image-title {
        font-size: 12px;
        line-height: 1.5;
        margin-top: 5px;
        color: rgba(0, 0, 0, .65);
    }
    
    .ivu-row {
        margin-bottom: 24px;
    }
    
    .preview-image-description {
        font-size: 12px;
        margin-top: 2px;
        color: rgba(0, 0, 0, .43);
        line-height: 1.5;
    }
    
    .design-hr {
        height: 1px;
        border: 0;
        background: #e9e9e9;
        margin: 16px 0;
        clear: both;
    }
</style>

<template>
    <i-article>
        <article>
            <h1>足不出户</h1>
            <p>能在这个页面解决的问题，就不要去其它页面解决，因为任何页面刷新和跳转都会引起变化盲视（Change Blindness），导致用户心流（Flow）被打断。频繁的页面刷新和跳转，就像在看戏时，演员说完一行台词就安排一次谢幕一样。</p>
            <Alert>变换盲视（Change Blindness） ：指视觉场景中的某些变化并未被观察者注意到的心理现象。产生这种现象的原因包括场景中的障碍物，眼球运动、地点的变化，或者是缺乏注意力等。——摘自《维基百科》</Alert>
            <Alert>心流（Flow） ：也有别名以化境 (Zone) 表示，亦有人翻译为神驰状态，定义是一种将个人精神力完全投注在某种活动上的感觉；心流产生时同时会有高度的兴奋及充实感。——摘自《维基百科》</Alert>
            <Anchor title="覆盖层" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>二次确认覆盖层：避免滥用 Modal 进行二次确认，应该勇敢的让用户去尝试，给用户机会『撤消』即可。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/woHOTIZeXCYmtkv.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description">用户点击『删除』后，直接操作；出现 Message 告知用户操作成功，并提供用户『撤消』的按钮；用户进行下一个操作或者 1 分钟内不进行任何操作， Message 消失，用户无法再『撤消』。
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/hDlhNscVtHdvvgu.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description">
                        特例：在执行某些无法『撤消』的操作时，可以点击『删除』后，出现 Popconfirm 进行二次确认，在当前页面完成任务。
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/JEcWKBYlMcYIowX.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">不推荐示例</div>
                    <div class="preview-image-description">
                        滥用 Modal 进行二次确认，就像『狼来了』一样，既打断用户心流（无法将上下文带到弹出框中），也无法避免失误的发生。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>详情覆盖层：一般在列表中，通过用户『悬停』/『点击』某个区块，在当前页加载该条列表项的更多详情信息。</p>
                <Alert>注：使用『悬停』激活时，当鼠标移入时，需要设置 0.5 秒左右的延迟触发；当鼠标移出时，立刻关闭覆盖层</Alert>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/WIhhhXExyQBsZwj.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">详情覆盖层示例</div>
                    <div class="preview-image-description">
                        通过『点击』图标查看更多详情信息。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>输入覆盖层：在覆盖层上，让用户直接进行少量字段的输入。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/YehbrRkldqWsezo.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">输入覆盖层示例</div>
                    <div class="preview-image-description">
                        鼠标『点击』图标触发；鼠标『点击』悬浮层以外的其他区块后，直接保存输入结果并退出。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="嵌入层" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>列表嵌入层：在列表中，显示某条列表项的详情信息，保持上下文不中断。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/bHCqDMqXhZvKbve.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">列表嵌入层示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>标签页：将多个平级的信息进行整理和分类了，一次只显示一组信息。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/MsVyvEIJtlxZWBL.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">标签页示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="虚拟页面" h2></Anchor>
            <Row>
                <Col>
                <p>在交互过程中，『覆盖层』可以在当前页面上方显示附加内容和交互链接；『嵌入层』可以在页面内部实现同样效果；而『虚拟页面』不局限机械时代的『页面』，可以利用信息时代的特点构建一种新型『页面』。</p>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="流程处理" h2></Anchor>
            <Row>
                <Col>
                 <p>长期以来，Web 实现流程的方式就是把每个步骤放在一个单独的页面上。虽然这种做法是分解问题最简单的方式，但并不是最佳解决方案。对于某些『流程处理』而言，让用户始终待在同一个页面上则更有必要。</p>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>渐进式展现：基于用户的操作/某种特定规则，渐进式展现不同的操作选项。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/xpynnwXnfCpGHvn.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">渐进式展现示例</div>
                    <div class="preview-image-description">
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>配置程序：通过提供一系列的配置项，帮助用户完成任务或者产品组装。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/EBVLFAwHHjiXtIJ.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">配置程序示例</div>
                    <div class="preview-image-description">
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>弹出框覆盖层：虽然弹出框的出现会打断用户的心流，但是有时候在弹出框中使用『步骤条』来管理复杂流程也是可行的。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/xcYosQncDPuFxhS.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">弹出框覆盖层示例</div>
                    <div class="preview-image-description">
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
        </article>
    </i-article>
</template>

<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/layout';
    import Anchor from '../../components/anchor.vue';
    
    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data() {
            return {
                code: Code,
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>