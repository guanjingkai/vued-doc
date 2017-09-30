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
            <h1>直接了当</h1>
            <p>正如 Alan Cooper 所言：『需要在哪里输出，就要允许在哪里输入』。这就是直接操作的原理。eg：不要为了编辑内容而打开另一个页面，应该直接在上下文中实现编辑。</p>
            <Anchor title="页内编辑" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>单字段行内编辑</p>
                <p>当『易读性』远比『易编辑性』重要时，可以使用『单击编辑』。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/PmVuUUKeamHdveT.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">单击编辑示例</div>
                    <div class="preview-image-description">状态一：普通的浏览模式，不区分可编辑行和不可编辑行；<br/>
                        状态二：鼠标悬停时，『指针』变为『手型』，编辑区域底色变黄，出现『Tooltips』提示单击编辑；<br/>
                        状态三：鼠标点击后，出现『输入框』、『确定』、『取消』表单元素，同时光标定位在『输入框』中。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>当『易读性』为主，同时又要突出操作行的『易编辑性』时，可使用『文字链/图标编辑』。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/b74a7b125bd8d76be75e5a02f4ce0c93.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">文字链/图标编辑示例</div>
                    <div class="preview-image-description">
                        状态一：在可编辑行附近出现文字链/图标；<br/>
                        状态二：鼠标点击『编辑』后，出现『输入框』、『确定』、『取消』表单元素，同时光标定位在『输入框』中。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>多字段行内编辑</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/hGXGErepBnrwqzj.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">多字段行内编辑示例</div>
                    <div class="preview-image-description">
                        编辑模式在不破坏整体性的前提下，可扩大空间，以便放下『输入框』等表单元素；其中，在 Table 中进行编辑模式切换时，需要保证每列的不跳动。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="利用拖放" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>拖放列表</p>
                <p>只能限制在一个维度（上/下或者左/右）进行拖放。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/DjMFcqSxZrulbGF.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">拖放列表示例</div>
                    <div class="preview-image-description">状态一：鼠标悬停该行时，出现可移动的『图标』；<br/>
                        状态二：鼠标悬停在该『图标』时，指针变为『手型』，点击即可进行拖动；<br/>
                        状态三：拖动到可放置区块，出现蓝色描边，告知用户该区块可放置该对象。</div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>拖放图片/文件</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/KVhqdSoLUjXPXuN.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">拖放图片/文件示例</div>
                    <div class="preview-image-description"></div>
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