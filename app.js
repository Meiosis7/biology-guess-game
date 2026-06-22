const MAX_GUESSES = 30;

const entries = [
  ["细胞", "细胞", ["结构", "生命系统", "基础"]],
  ["细胞膜", "细胞", ["结构", "选择透过性", "流动镶嵌模型", "物质运输"]],
  ["细胞壁", "细胞", ["植物", "结构", "支持", "纤维素"]],
  ["细胞质", "细胞", ["结构", "代谢", "基质"]],
  ["细胞核", "细胞", ["结构", "遗传信息", "控制中心", "染色质"]],
  ["细胞器", "细胞", ["结构", "分工", "真核细胞"]],
  ["线粒体", "细胞", ["结构", "有氧呼吸", "能量", "双层膜"]],
  ["叶绿体", "细胞", ["结构", "光合作用", "植物", "双层膜"]],
  ["核糖体", "细胞", ["结构", "蛋白质", "翻译", "无膜"]],
  ["内质网", "细胞", ["结构", "蛋白质加工", "脂质合成", "单层膜"]],
  ["高尔基体", "细胞", ["结构", "加工", "分泌", "单层膜"]],
  ["溶酶体", "细胞", ["结构", "水解酶", "消化", "单层膜"]],
  ["液泡", "细胞", ["植物", "结构", "渗透", "单层膜"]],
  ["中心体", "细胞", ["动物", "有丝分裂", "纺锤体", "无膜"]],
  ["原核细胞", "细胞", ["细菌", "无成形细胞核", "拟核"]],
  ["真核细胞", "细胞", ["细胞核", "细胞器", "动植物"]],
  ["细胞骨架", "细胞", ["结构", "运动", "支持"]],
  ["生物膜系统", "细胞", ["细胞膜", "细胞器", "结构联系"]],
  ["流动镶嵌模型", "细胞", ["细胞膜", "磷脂双分子层", "蛋白质"]],
  ["选择透过性", "细胞", ["细胞膜", "物质运输", "渗透"]],
  ["自由扩散", "细胞", ["物质运输", "顺浓度梯度", "不耗能"]],
  ["协助扩散", "细胞", ["物质运输", "载体蛋白", "通道蛋白", "不耗能"]],
  ["主动运输", "细胞", ["物质运输", "载体蛋白", "耗能", "逆浓度梯度"]],
  ["胞吞", "细胞", ["物质运输", "大分子", "耗能"]],
  ["胞吐", "细胞", ["物质运输", "分泌", "大分子", "耗能"]],
  ["渗透作用", "细胞", ["水分", "半透膜", "浓度差"]],
  ["质壁分离", "细胞", ["植物", "渗透失水", "液泡"]],
  ["质壁分离复原", "细胞", ["植物", "渗透吸水", "液泡"]],
  ["水", "组成", ["无机物", "溶剂", "代谢"]],
  ["无机盐", "组成", ["离子", "细胞组成", "稳态"]],
  ["分子", "组成", ["细胞中的分子", "化合物", "糖类", "脂质", "蛋白质", "核酸"]],
  ["糖类", "组成", ["能源物质", "单糖", "多糖"]],
  ["脂质", "组成", ["储能", "脂肪", "磷脂", "固醇"]],
  ["脂肪", "组成", ["脂质", "储能物质", "甘油", "脂肪酸"]],
  ["蛋白质", "组成", ["氨基酸", "生命活动承担者", "酶", "结构"]],
  ["核酸", "组成", ["遗传信息", "DNA", "RNA", "核苷酸"]],
  ["氨基酸", "组成", ["蛋白质", "肽键", "结构单位"]],
  ["肽键", "组成", ["蛋白质", "脱水缩合", "结构"]],
  ["脱水缩合", "组成", ["蛋白质", "多糖", "合成反应"]],
  ["水解", "组成", ["分解反应", "大分子", "消化"]],
  ["DNA", "遗传", ["核酸", "遗传物质", "双螺旋", "复制"]],
  ["RNA", "遗传", ["核酸", "转录", "翻译", "单链"]],
  ["核苷酸", "组成", ["核酸", "磷酸", "五碳糖", "碱基"]],
  ["ATP", "代谢", ["直接能源物质", "腺苷三磷酸", "能量"]],
  ["ADP", "代谢", ["能量", "ATP", "磷酸"]],
  ["酶", "代谢", ["催化", "蛋白质", "专一性", "高效性"]],
  ["酶活性", "代谢", ["温度", "pH", "催化", "影响因素"]],
  ["活化能", "代谢", ["酶", "催化", "反应速率"]],
  ["植物", "细胞", ["真核生物", "细胞壁", "叶绿体", "光合作用", "自养生物"]],
  ["动物", "细胞", ["真核生物", "中心体", "异养生物", "细胞呼吸"]],
  ["光合作用", "代谢", ["叶绿体", "光能", "有机物", "二氧化碳", "植物", "自养生物"]],
  ["光反应", "代谢", ["光合作用", "类囊体", "水的光解", "ATP", "植物", "叶绿体"]],
  ["暗反应", "代谢", ["光合作用", "叶绿体基质", "二氧化碳固定", "三碳化合物", "植物"]],
  ["叶绿素", "代谢", ["色素", "光合作用", "吸收光能"]],
  ["类囊体", "代谢", ["叶绿体", "光反应", "色素"]],
  ["碳反应", "代谢", ["暗反应", "卡尔文循环", "二氧化碳"]],
  ["有氧呼吸", "代谢", ["线粒体", "葡萄糖", "ATP", "氧气"]],
  ["无氧呼吸", "代谢", ["细胞质基质", "酒精", "乳酸", "少量ATP"]],
  ["细胞呼吸", "代谢", ["能量", "有氧呼吸", "无氧呼吸"]],
  ["糖酵解", "代谢", ["细胞质基质", "葡萄糖", "丙酮酸"]],
  ["丙酮酸", "代谢", ["呼吸作用", "糖酵解", "中间产物"]],
  ["酒精发酵", "代谢", ["无氧呼吸", "酵母菌", "二氧化碳"]],
  ["乳酸发酵", "代谢", ["无氧呼吸", "乳酸菌", "肌细胞"]],
  ["细胞周期", "增殖", ["分裂间期", "分裂期", "连续分裂"]],
  ["分裂间期", "增殖", ["DNA复制", "蛋白质合成", "细胞周期"]],
  ["有丝分裂", "增殖", ["体细胞", "染色体", "细胞增殖"]],
  ["减数分裂", "遗传", ["生殖细胞", "染色体减半", "遗传多样性"]],
  ["无丝分裂", "增殖", ["蛙红细胞", "细胞核延长"]],
  ["染色体", "遗传", ["DNA", "蛋白质", "遗传物质载体"]],
  ["染色质", "遗传", ["DNA", "蛋白质", "细胞核"]],
  ["姐妹染色单体", "遗传", ["染色体", "DNA复制", "着丝粒"]],
  ["同源染色体", "遗传", ["减数分裂", "配对", "形态大小相同"]],
  ["联会", "遗传", ["减数分裂", "同源染色体", "四分体"]],
  ["四分体", "遗传", ["减数分裂", "同源染色体", "染色单体"]],
  ["受精作用", "遗传", ["精子", "卵细胞", "染色体数恢复"]],
  ["配子", "遗传", ["减数分裂", "生殖细胞", "单倍体"]],
  ["细胞分化", "生命历程", ["基因选择性表达", "组织", "稳定性"]],
  ["细胞全能性", "生命历程", ["植物组织培养", "基因完整", "分化"]],
  ["细胞衰老", "生命历程", ["水分减少", "酶活性降低", "代谢减慢"]],
  ["细胞凋亡", "生命历程", ["程序性死亡", "基因控制", "发育"]],
  ["细胞坏死", "生命历程", ["外界损伤", "非正常死亡", "炎症"]],
  ["癌细胞", "生命历程", ["无限增殖", "原癌基因", "抑癌基因"]],
  ["原癌基因", "遗传", ["癌变", "细胞增殖", "基因突变"]],
  ["抑癌基因", "遗传", ["癌变", "细胞周期", "基因突变"]],
  ["孟德尔遗传定律", "遗传", ["分离定律", "自由组合定律", "豌豆"]],
  ["分离定律", "遗传", ["等位基因", "配子", "一对相对性状"]],
  ["自由组合定律", "遗传", ["非同源染色体", "两对性状", "配子"]],
  ["相对性状", "遗传", ["同种生物", "同一性状", "不同表现"]],
  ["显性性状", "遗传", ["显性基因", "杂合子", "表现型"]],
  ["隐性性状", "遗传", ["隐性基因", "纯合子", "表现型"]],
  ["等位基因", "遗传", ["同源染色体", "相同位置", "相对性状"]],
  ["基因型", "遗传", ["基因组成", "遗传", "表现型基础"]],
  ["表现型", "遗传", ["性状表现", "基因型", "环境"]],
  ["纯合子", "遗传", ["等位基因相同", "自交", "稳定遗传"]],
  ["杂合子", "遗传", ["等位基因不同", "分离", "测交"]],
  ["测交", "遗传", ["隐性纯合子", "基因型测定", "后代比例"]],
  ["伴性遗传", "遗传", ["性染色体", "红绿色盲", "血友病"]],
  ["常染色体", "遗传", ["性染色体以外", "遗传", "染色体"]],
  ["性染色体", "遗传", ["性别决定", "X染色体", "Y染色体"]],
  ["红绿色盲", "遗传", ["伴X隐性遗传", "人类遗传病", "色觉"]],
  ["血友病", "遗传", ["伴X隐性遗传", "凝血", "人类遗传病"]],
  ["DNA复制", "遗传", ["半保留复制", "碱基互补配对", "解旋"]],
  ["半保留复制", "遗传", ["DNA复制", "模板链", "子代DNA"]],
  ["碱基互补配对", "遗传", ["A-T", "G-C", "复制", "转录"]],
  ["基因", "遗传", ["DNA片段", "遗传效应", "控制性状"]],
  ["遗传信息", "遗传", ["碱基排列顺序", "DNA", "基因"]],
  ["遗传密码", "遗传", ["mRNA", "密码子", "氨基酸"]],
  ["密码子", "遗传", ["mRNA", "三个碱基", "翻译"]],
  ["反密码子", "遗传", ["tRNA", "密码子配对", "翻译"]],
  ["转录", "遗传", ["DNA", "RNA", "细胞核", "模板链"]],
  ["翻译", "遗传", ["mRNA", "核糖体", "蛋白质", "tRNA"]],
  ["中心法则", "遗传", ["DNA", "RNA", "蛋白质", "遗传信息传递"]],
  ["基因表达", "遗传", ["转录", "翻译", "蛋白质"]],
  ["基因突变", "变异", ["碱基改变", "新基因", "不定向"]],
  ["基因重组", "变异", ["有性生殖", "自由组合", "交叉互换"]],
  ["染色体变异", "变异", ["结构变异", "数目变异", "可见"]],
  ["染色体结构变异", "变异", ["缺失", "重复", "倒位", "易位"]],
  ["染色体数目变异", "变异", ["非整倍体", "多倍体", "单倍体"]],
  ["单倍体", "变异", ["配子发育", "染色体组", "育种"]],
  ["二倍体", "变异", ["两个染色体组", "正常个体", "体细胞"]],
  ["多倍体", "变异", ["染色体组增加", "秋水仙素", "植物育种"]],
  ["染色体组", "变异", ["非同源染色体", "完整遗传信息", "单倍体"]],
  ["人类遗传病", "遗传", ["单基因病", "多基因病", "染色体异常"]],
  ["遗传咨询", "遗传", ["家系分析", "产前诊断", "遗传病预防"]],
  ["产前诊断", "遗传", ["羊水检查", "B超", "遗传病"]],
  ["杂交育种", "育种", ["基因重组", "优良性状", "选择"]],
  ["诱变育种", "育种", ["基因突变", "物理化学因素", "不定向"]],
  ["单倍体育种", "育种", ["花药离体培养", "秋水仙素", "纯合子"]],
  ["多倍体育种", "育种", ["秋水仙素", "染色体数目", "植物"]],
  ["基因工程育种", "育种", ["目的基因", "载体", "转基因"]],
  ["现代生物进化理论", "进化", ["种群", "基因频率", "自然选择"]],
  ["种群", "生态", ["同种生物", "一定区域", "进化单位"]],
  ["基因库", "进化", ["种群", "全部基因", "遗传多样性"]],
  ["基因频率", "进化", ["种群", "等位基因", "进化标志"]],
  ["自然选择", "进化", ["适者生存", "基因频率改变", "定向"]],
  ["隔离", "进化", ["物种形成", "地理隔离", "生殖隔离"]],
  ["地理隔离", "进化", ["空间阻隔", "物种形成", "种群"]],
  ["生殖隔离", "进化", ["不能交配", "后代不可育", "新物种"]],
  ["物种", "进化", ["自然状态", "可交配", "可育后代"]],
  ["共同进化", "进化", ["生物与环境", "生物多样性", "相互影响"]],
  ["生物多样性", "生态", ["基因多样性", "物种多样性", "生态系统多样性"]],
  ["内环境", "稳态", ["细胞外液", "血浆", "组织液", "淋巴"]],
  ["血浆", "稳态", ["内环境", "细胞外液", "血液"]],
  ["组织液", "稳态", ["内环境", "细胞外液", "组织细胞"]],
  ["淋巴", "稳态", ["内环境", "细胞外液", "免疫"]],
  ["稳态", "稳态", ["内环境", "相对稳定", "调节"]],
  ["神经调节", "稳态", ["反射", "神经系统", "快速"]],
  ["体液调节", "稳态", ["激素", "内分泌", "缓慢持久"]],
  ["免疫调节", "稳态", ["免疫系统", "防卫", "监控清除"]],
  ["反射", "稳态", ["神经调节", "反射弧", "基本方式"]],
  ["反射弧", "稳态", ["感受器", "传入神经", "神经中枢", "效应器"]],
  ["兴奋", "稳态", ["神经纤维", "电信号", "膜电位"]],
  ["突触", "稳态", ["神经元", "神经递质", "单向传递"]],
  ["神经递质", "稳态", ["突触", "化学信号", "受体"]],
  ["激素", "稳态", ["体液调节", "内分泌腺", "微量高效"]],
  ["甲状腺激素", "稳态", ["代谢", "生长发育", "反馈调节"]],
  ["胰岛素", "稳态", ["血糖降低", "胰岛B细胞", "激素"]],
  ["胰高血糖素", "稳态", ["血糖升高", "胰岛A细胞", "激素"]],
  ["血糖平衡", "稳态", ["胰岛素", "胰高血糖素", "反馈"]],
  ["反馈调节", "稳态", ["负反馈", "稳态", "激素调节"]],
  ["体温调节", "稳态", ["下丘脑", "产热散热", "稳态"]],
  ["水盐平衡", "稳态", ["抗利尿激素", "肾小管", "下丘脑"]],
  ["免疫系统", "免疫", ["免疫器官", "免疫细胞", "免疫活性物质"]],
  ["特异性免疫", "免疫", ["体液免疫", "细胞免疫", "抗原"]],
  ["非特异性免疫", "免疫", ["第一道防线", "第二道防线", "先天"]],
  ["体液免疫", "免疫", ["B细胞", "浆细胞", "抗体"]],
  ["细胞免疫", "免疫", ["T细胞", "靶细胞", "效应T细胞"]],
  ["抗原", "免疫", ["免疫反应", "异物", "特异性"]],
  ["抗体", "免疫", ["浆细胞", "蛋白质", "体液免疫"]],
  ["浆细胞", "免疫", ["B细胞", "抗体", "体液免疫"]],
  ["记忆细胞", "免疫", ["二次免疫", "特异性免疫", "快速"]],
  ["疫苗", "免疫", ["抗原", "预防接种", "记忆细胞"]],
  ["过敏反应", "免疫", ["免疫失调", "抗体", "组织胺"]],
  ["自身免疫病", "免疫", ["免疫失调", "攻击自身", "疾病"]],
  ["免疫缺陷病", "免疫", ["免疫失调", "艾滋病", "防卫减弱"]],
  ["植物激素", "调节", ["植物生命活动", "微量", "信息分子"]],
  ["生长素", "调节", ["植物激素", "向光性", "两重性"]],
  ["赤霉素", "调节", ["植物激素", "细胞伸长", "种子萌发"]],
  ["细胞分裂素", "调节", ["植物激素", "细胞分裂", "芽"]],
  ["脱落酸", "调节", ["植物激素", "抑制萌发", "气孔关闭"]],
  ["乙烯", "调节", ["植物激素", "果实成熟", "气体"]],
  ["向光性", "调节", ["生长素", "单侧光", "弯曲生长"]],
  ["顶端优势", "调节", ["生长素", "顶芽", "侧芽抑制"]],
  ["种群密度", "生态", ["种群", "数量特征", "调查"]],
  ["出生率", "生态", ["种群", "数量增长", "年龄结构"]],
  ["死亡率", "生态", ["种群", "数量下降", "年龄结构"]],
  ["迁入率", "生态", ["种群", "数量增长", "空间"]],
  ["迁出率", "生态", ["种群", "数量下降", "空间"]],
  ["年龄组成", "生态", ["种群", "增长型", "稳定型", "衰退型"]],
  ["性别比例", "生态", ["种群", "出生率", "数量特征"]],
  ["样方法", "生态", ["植物", "种群密度", "调查"]],
  ["标志重捕法", "生态", ["动物", "种群密度", "调查"]],
  ["群落", "生态", ["不同种群", "一定区域", "物种组成"]],
  ["物种丰富度", "生态", ["群落", "物种数目", "多样性"]],
  ["种间关系", "生态", ["捕食", "竞争", "寄生", "互利共生"]],
  ["捕食", "生态", ["种间关系", "食物", "数量波动"]],
  ["竞争", "生态", ["种间关系", "资源", "生态位"]],
  ["寄生", "生态", ["种间关系", "宿主", "利益损害"]],
  ["互利共生", "生态", ["种间关系", "双方有利", "合作"]],
  ["生态位", "生态", ["群落", "资源利用", "空间位置"]],
  ["群落演替", "生态", ["初生演替", "次生演替", "群落变化"]],
  ["初生演替", "生态", ["裸岩", "沙丘", "无土壤"]],
  ["次生演替", "生态", ["火灾后", "弃耕农田", "有土壤"]],
  ["生态系统", "生态", ["生物群落", "无机环境", "能量流动"]],
  ["生产者", "生态", ["生态系统", "自养生物", "绿色植物"]],
  ["消费者", "生态", ["生态系统", "异养生物", "动物"]],
  ["分解者", "生态", ["生态系统", "细菌真菌", "物质循环"]],
  ["食物链", "生态", ["捕食关系", "能量流动", "营养级"]],
  ["食物网", "生态", ["多条食物链", "生态系统", "复杂关系"]],
  ["营养级", "生态", ["食物链", "能量流动", "传递效率"]],
  ["能量流动", "生态", ["单向流动", "逐级递减", "生态系统"]],
  ["物质循环", "生态", ["全球性", "反复利用", "生态系统"]],
  ["碳循环", "生态", ["二氧化碳", "光合作用", "呼吸作用"]],
  ["信息传递", "生态", ["物理信息", "化学信息", "行为信息"]],
  ["生态平衡", "生态", ["自我调节能力", "稳定性", "生态系统"]],
  ["抵抗力稳定性", "生态", ["生态系统", "干扰", "保持原状"]],
  ["恢复力稳定性", "生态", ["生态系统", "干扰后恢复", "稳定性"]],
  ["生物富集", "生态", ["污染物", "食物链", "营养级升高"]],
  ["生态工程", "生态", ["整体性", "协调", "循环", "自生"]],
  ["发酵工程", "生物技术", ["微生物", "发酵罐", "代谢产物"]],
  ["基因工程", "生物技术", ["目的基因", "载体", "限制酶", "DNA连接酶"]],
  ["限制酶", "生物技术", ["基因工程", "识别序列", "切割DNA"]],
  ["DNA连接酶", "生物技术", ["基因工程", "磷酸二酯键", "连接DNA"]],
  ["载体", "生物技术", ["质粒", "目的基因", "导入受体细胞"]],
  ["质粒", "生物技术", ["细菌", "环状DNA", "载体"]],
  ["目的基因", "生物技术", ["基因工程", "目标性状", "转基因"]],
  ["PCR", "生物技术", ["DNA扩增", "引物", "耐高温DNA聚合酶"]],
  ["凝胶电泳", "生物技术", ["DNA片段", "分离", "检测"]],
  ["蛋白质工程", "生物技术", ["基因改造", "蛋白质结构", "定向设计"]],
  ["细胞工程", "生物技术", ["植物组织培养", "动物细胞培养", "细胞融合"]],
  ["植物组织培养", "生物技术", ["细胞全能性", "脱分化", "再分化"]],
  ["愈伤组织", "生物技术", ["植物组织培养", "脱分化", "分裂"]],
  ["动物细胞培养", "生物技术", ["无菌", "营养", "细胞增殖"]],
  ["单克隆抗体", "生物技术", ["杂交瘤细胞", "抗体", "动物细胞融合"]],
  ["胚胎工程", "生物技术", ["胚胎移植", "体外受精", "克隆"]],
  ["克隆", "生物技术", ["无性繁殖", "遗传相同", "核移植"]],
  ["转基因生物", "生物技术", ["基因工程", "目的基因", "新品种"]],
  ["病毒", "微生物", ["非细胞结构", "寄生", "核酸"]],
  ["细菌", "微生物", ["原核生物", "细胞壁", "拟核"]],
  ["真菌", "微生物", ["真核生物", "分解者", "酵母菌"]],
  ["蓝细菌", "微生物", ["原核生物", "光合作用", "自养"]],
  ["酵母菌", "微生物", ["真菌", "酒精发酵", "兼性厌氧"]],
  ["乳酸菌", "微生物", ["细菌", "乳酸发酵", "厌氧"]],
  ["噬菌体", "微生物", ["病毒", "侵染细菌", "DNA"]],
  ["艾滋病", "免疫", ["HIV", "免疫缺陷", "T细胞"]],
  ["HIV", "免疫", ["病毒", "RNA", "逆转录", "T细胞"]],
  ["生态农业", "生态", ["物质循环", "能量多级利用", "生态工程"]],
  ["调查法", "生态", ["种群", "样方法", "标志重捕法"]],
  ["显微镜", "实验", ["观察", "细胞", "放大"]],
  ["临时装片", "实验", ["显微镜", "观察", "制片"]],
  ["斐林试剂", "实验", ["还原糖", "砖红色沉淀", "鉴定"]],
  ["双缩脲试剂", "实验", ["蛋白质", "紫色", "鉴定"]],
  ["苏丹III染液", "实验", ["脂肪", "橘黄色", "鉴定"]],
  ["健那绿", "实验", ["线粒体", "活细胞染色", "蓝绿色"]],
  ["层析液", "实验", ["绿叶中色素", "纸层析", "分离"]],
  ["卡诺氏液", "实验", ["固定", "低温诱导", "染色体"]],
  ["秋水仙素", "育种", ["抑制纺锤体", "多倍体", "染色体加倍"]]
].map(([word, chapter, tags]) => ({ word, chapter, tags }));

const semanticGroups = [
  ["分子与细胞", ["分子", "细胞", "细胞中的分子", "化合物", "水", "无机盐", "糖类", "脂质", "脂肪", "蛋白质", "核酸", "DNA", "RNA", "酶", "ATP", "细胞膜", "细胞器", "光合作用", "细胞呼吸", "细胞周期"]],
  ["细胞结构", ["细胞", "细胞膜", "细胞壁", "细胞质", "细胞核", "细胞器", "线粒体", "叶绿体", "核糖体", "内质网", "高尔基体", "溶酶体", "液泡", "中心体", "细胞骨架", "生物膜系统", "原核细胞", "真核细胞"]],
  ["物质运输", ["细胞膜", "选择透过性", "流动镶嵌模型", "自由扩散", "协助扩散", "主动运输", "胞吞", "胞吐", "渗透作用", "质壁分离", "质壁分离复原", "载体蛋白", "通道蛋白", "浓度梯度", "半透膜"]],
  ["组成物质", ["分子", "细胞中的分子", "化合物", "水", "无机盐", "糖类", "脂质", "脂肪", "蛋白质", "核酸", "DNA", "RNA", "氨基酸", "肽键", "核苷酸", "脱水缩合", "水解", "单糖", "多糖", "磷脂", "固醇", "甘油", "脂肪酸"]],
  ["酶与能量", ["酶", "酶活性", "活化能", "ATP", "ADP", "催化", "专一性", "高效性", "温度", "pH", "能量"]],
  ["光合作用", ["植物", "叶绿体", "光合作用", "光反应", "暗反应", "碳反应", "叶绿素", "类囊体", "叶绿体基质", "二氧化碳", "三碳化合物", "卡尔文循环", "光能", "有机物", "自养生物", "生产者", "蓝细菌", "绿色植物"]],
  ["细胞呼吸", ["动物", "植物", "线粒体", "细胞呼吸", "呼吸作用", "有氧呼吸", "无氧呼吸", "糖酵解", "丙酮酸", "酒精发酵", "乳酸发酵", "葡萄糖", "氧气", "二氧化碳", "ATP", "酵母菌", "乳酸菌"]],
  ["细胞增殖", ["细胞周期", "分裂间期", "分裂期", "有丝分裂", "无丝分裂", "DNA复制", "染色体", "姐妹染色单体", "纺锤体", "体细胞", "中心体"]],
  ["减数与受精", ["减数分裂", "同源染色体", "联会", "四分体", "受精作用", "配子", "生殖细胞", "染色体减半", "遗传多样性"]],
  ["细胞生命历程", ["细胞", "细胞分化", "细胞全能性", "细胞衰老", "细胞凋亡", "细胞坏死", "癌细胞", "分化", "全能性", "衰老", "凋亡", "坏死", "基因选择性表达"]],
  ["生命历程", ["细胞", "细胞分化", "细胞全能性", "细胞衰老", "细胞凋亡", "细胞坏死", "癌细胞", "原癌基因", "抑癌基因", "基因选择性表达", "植物组织培养"]],
  ["孟德尔遗传", ["孟德尔遗传定律", "分离定律", "自由组合定律", "相对性状", "显性性状", "隐性性状", "等位基因", "基因型", "表现型", "纯合子", "杂合子", "测交", "配子", "豌豆"]],
  ["伴性遗传", ["伴性遗传", "常染色体", "性染色体", "红绿色盲", "血友病", "X染色体", "Y染色体", "人类遗传病"]],
  ["分子遗传", ["DNA", "RNA", "DNA复制", "半保留复制", "碱基互补配对", "基因", "遗传信息", "遗传密码", "密码子", "反密码子", "转录", "翻译", "中心法则", "基因表达", "mRNA", "tRNA", "核糖体", "蛋白质"]],
  ["变异育种", ["基因突变", "基因重组", "染色体变异", "染色体结构变异", "染色体数目变异", "单倍体", "二倍体", "多倍体", "染色体组", "杂交育种", "诱变育种", "单倍体育种", "多倍体育种", "基因工程育种", "秋水仙素"]],
  ["遗传病", ["人类遗传病", "遗传咨询", "产前诊断", "单基因病", "多基因病", "染色体异常", "羊水检查", "红绿色盲", "血友病"]],
  ["进化", ["现代生物进化理论", "种群", "基因库", "基因频率", "自然选择", "隔离", "地理隔离", "生殖隔离", "物种", "共同进化", "生物多样性", "适者生存"]],
  ["内环境稳态", ["内环境", "血浆", "组织液", "淋巴", "稳态", "细胞外液", "相对稳定", "血糖平衡", "体温调节", "水盐平衡", "反馈调节"]],
  ["神经调节", ["神经调节", "反射", "反射弧", "兴奋", "突触", "神经递质", "感受器", "传入神经", "神经中枢", "效应器", "神经元", "膜电位"]],
  ["体液调节", ["体液调节", "激素", "甲状腺激素", "胰岛素", "胰高血糖素", "血糖平衡", "反馈调节", "内分泌", "下丘脑", "抗利尿激素"]],
  ["免疫", ["免疫系统", "免疫调节", "特异性免疫", "非特异性免疫", "体液免疫", "细胞免疫", "抗原", "抗体", "浆细胞", "记忆细胞", "疫苗", "过敏反应", "自身免疫病", "免疫缺陷病", "艾滋病", "HIV", "T细胞", "B细胞"]],
  ["植物调节", ["植物", "植物激素", "生长素", "赤霉素", "细胞分裂素", "脱落酸", "乙烯", "向光性", "顶端优势", "单侧光", "果实成熟", "种子萌发"]],
  ["种群", ["种群", "种群密度", "出生率", "死亡率", "迁入率", "迁出率", "年龄组成", "性别比例", "样方法", "标志重捕法", "调查法", "数量特征"]],
  ["群落", ["群落", "物种丰富度", "种间关系", "捕食", "竞争", "寄生", "互利共生", "生态位", "群落演替", "初生演替", "次生演替", "物种组成"]],
  ["生态系统", ["生态系统", "生产者", "消费者", "分解者", "食物链", "食物网", "营养级", "能量流动", "物质循环", "碳循环", "信息传递", "生态平衡", "抵抗力稳定性", "恢复力稳定性", "生物富集", "生态农业", "生态工程"]],
  ["生物技术", ["发酵工程", "基因工程", "限制酶", "DNA连接酶", "载体", "质粒", "目的基因", "PCR", "凝胶电泳", "蛋白质工程", "细胞工程", "植物组织培养", "动物细胞培养", "单克隆抗体", "胚胎工程", "克隆", "转基因生物"]],
  ["微生物", ["病毒", "细菌", "真菌", "蓝细菌", "酵母菌", "乳酸菌", "噬菌体", "HIV", "原核生物", "真核生物", "发酵工程", "分解者"]],
  ["实验", ["显微镜", "临时装片", "斐林试剂", "双缩脲试剂", "苏丹III染液", "健那绿", "层析液", "卡诺氏液", "观察", "鉴定", "染色", "纸层析"]]
].map(([name, terms]) => ({ name, terms }));

const equivalentTerms = [
  ["暗反应", "碳反应"],
  ["细胞呼吸", "呼吸作用"],
  ["DNA", "脱氧核糖核酸"],
  ["RNA", "核糖核酸"],
  ["脂质", "脂肪"],
  ["HIV", "人类免疫缺陷病毒"],
  ["内环境", "细胞外液"]
];

const byWord = new Map(entries.map((entry) => [entry.word, entry]));
const knownConcepts = new Set(entries.flatMap((entry) => [entry.word, entry.chapter, ...entry.tags]));
semanticGroups.forEach((group) => {
  knownConcepts.add(group.name);
  group.terms.forEach((term) => knownConcepts.add(term));
});
equivalentTerms.flat().forEach((term) => knownConcepts.add(term));

const broadGroupBridgeTerms = new Set([
  "植物",
  "动物",
  "细胞",
  "代谢",
  "能量",
  "ATP",
  "ADP",
  "DNA",
  "RNA",
  "蛋白质",
  "二氧化碳",
  "氧气",
  "水",
  "基因",
  "染色体",
  "种群",
  "生态系统",
  "稳态",
  "激素",
  "病毒",
  "细菌",
  "真菌"
]);

const state = {
  target: null,
  guesses: [],
  finished: false,
  hintLevel: 0
};

const els = {
  form: document.querySelector("#guessForm"),
  input: document.querySelector("#guessInput"),
  resultList: document.querySelector("#resultList"),
  message: document.querySelector("#message"),
  guessCount: document.querySelector("#guessCount"),
  remainingCount: document.querySelector("#remainingCount"),
  progressFill: document.querySelector("#progressFill"),
  hintButton: document.querySelector("#hintButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  restartButton: document.querySelector("#restartButton"),
  restartTopButton: document.querySelector("#restartTopButton"),
  menuButton: document.querySelector("#menuButton"),
  drawer: document.querySelector("#drawer"),
  closeDrawer: document.querySelector("#closeDrawer")
};

function normalizeWord(value) {
  return value.trim().replace(/\s+/g, "").replace(/[，。、“”‘’]/g, "");
}

function sampleTarget(previousWord = "") {
  const pool = entries.filter((entry) => entry.word !== previousWord);
  return pool[Math.floor(Math.random() * pool.length)];
}

function uniqueChars(word) {
  return new Set([...word.toUpperCase()]);
}

function jaccard(a, b) {
  const left = new Set(a);
  const right = new Set(b);
  const intersection = [...left].filter((item) => right.has(item)).length;
  const union = new Set([...left, ...right]).size || 1;
  return intersection / union;
}

function addWeighted(features, term, weight) {
  if (!term) return;
  features.set(term, Math.max(features.get(term) || 0, weight));
}

function equivalentSet(term) {
  const found = equivalentTerms.find((group) => group.includes(term));
  return found ? found : [term];
}

function groupNamesFor(terms, options = {}) {
  const { fromTags = false } = options;
  return semanticGroups
    .filter((group) =>
      terms.some((term) => {
        if (group.name === term) return true;
        if (fromTags && broadGroupBridgeTerms.has(term)) return false;
        return group.terms.includes(term);
      })
    )
    .map((group) => group.name);
}

function buildFeaturesForConcept(word) {
  const entry = byWord.get(word);
  const features = new Map();
  const directTerms = entry ? [entry.word, entry.chapter, ...entry.tags] : [word];

  addWeighted(features, word, 1.45);
  directTerms.forEach((term) => addWeighted(features, term, term === word ? 1.45 : 1));
  equivalentSet(word).forEach((term) => addWeighted(features, term, 1.35));

  if (entry) {
    addWeighted(features, `章节:${entry.chapter}`, 0.82);
    entry.tags.forEach((tag) => addWeighted(features, `标签:${tag}`, 1.08));
  }

  const primaryGroups = groupNamesFor([word, entry?.chapter].filter(Boolean));
  const tagGroups = entry ? groupNamesFor(entry.tags, { fromTags: true }) : [];
  new Set([...primaryGroups, ...tagGroups]).forEach((name) => {
    addWeighted(features, `知识团:${name}`, 1.18);
    addWeighted(features, name, 0.68);
  });

  semanticGroups.forEach((group) => {
    if (group.name === word) {
      group.terms.forEach((term) => addWeighted(features, term, 0.58));
    }
    if (group.terms.includes(word)) {
      group.terms.forEach((term) => addWeighted(features, term, term === word ? 1.45 : 0.34));
    }
  });

  return features;
}

function weightedSimilarity(aFeatures, bFeatures) {
  const keys = new Set([...aFeatures.keys(), ...bFeatures.keys()]);
  let shared = 0;
  let total = 0;
  keys.forEach((key) => {
    const left = aFeatures.get(key) || 0;
    const right = bFeatures.get(key) || 0;
    shared += Math.min(left, right);
    total += Math.max(left, right);
  });
  return total ? shared / total : 0;
}

function directRelationScore(guessWord, target) {
  const targetTerms = [target.word, target.chapter, ...target.tags];
  const guess = byWord.get(guessWord);
  const guessTerms = guess ? [guess.word, guess.chapter, ...guess.tags] : [guessWord];
  const guessGroups = new Set([
    ...groupNamesFor([guessWord, guess?.chapter].filter(Boolean)),
    ...(guess ? groupNamesFor(guess.tags, { fromTags: true }) : [])
  ]);
  const targetGroups = new Set([
    ...groupNamesFor([target.word, target.chapter]),
    ...groupNamesFor(target.tags, { fromTags: true })
  ]);

  if (equivalentSet(guessWord).includes(target.word) || equivalentSet(target.word).includes(guessWord)) {
    return 1;
  }
  if (target.tags.includes(guessWord) || guess?.tags.includes(target.word)) {
    return 0.78;
  }
  if (
    targetTerms.some((term) => term.includes(guessWord) && guessWord.length >= 2) ||
    guessTerms.some((term) => term.includes(target.word) && target.word.length >= 2)
  ) {
    return 0.7;
  }
  if (
    (target.word.includes(guessWord) && guessWord.length >= 2) ||
    (guessWord.includes(target.word) && target.word.length >= 2)
  ) {
    return 0.64;
  }
  if ([...targetGroups].some((name) => guessGroups.has(name))) {
    return 0.54;
  }
  if (guess && guess.chapter === target.chapter) {
    return 0.32;
  }
  return 0;
}

function explainGuess(guessWord, score) {
  const target = state.target;
  const guess = byWord.get(guessWord);
  if (isCorrectGuess(guessWord)) return "答案命中";
  if (!guess && !knownConcepts.has(guessWord)) return "不在词库";

  const targetTerms = [target.word, target.chapter, ...target.tags];
  const guessTerms = guess ? [guess.word, guess.chapter, ...guess.tags] : [guessWord];
  const guessGroups = new Set([
    ...groupNamesFor([guessWord, guess?.chapter].filter(Boolean)),
    ...(guess ? groupNamesFor(guess.tags, { fromTags: true }) : [])
  ]);
  const targetGroups = new Set([
    ...groupNamesFor([target.word, target.chapter]),
    ...groupNamesFor(target.tags, { fromTags: true })
  ]);
  const sharedGroups = [...guessGroups].filter((name) => targetGroups.has(name));
  const sharedTags = guess ? guess.tags.filter((tag) => target.tags.includes(tag)) : [];

  if (target.tags.includes(guessWord) || guess?.tags.includes(target.word)) return "直接概念相关";
  if (
    targetTerms.some((term) => term.includes(guessWord) && guessWord.length >= 2) ||
    guessTerms.some((term) => term.includes(target.word) && target.word.length >= 2)
  ) {
    return "词义包含相关";
  }
  if (sharedGroups.length) return `同属${sharedGroups[0]}`;
  if (sharedTags.length) return `共享${sharedTags[0]}`;
  if (guess && guess.chapter === target.chapter) return `同属${target.chapter}模块`;
  return score > 0 ? "弱相关" : "不在词库";
}

function isCorrectGuess(guessWord) {
  return (
    guessWord === state.target.word ||
    equivalentSet(guessWord).includes(state.target.word) ||
    equivalentSet(state.target.word).includes(guessWord)
  );
}

function scoreGuess(guessWord) {
  const target = state.target;
  const guess = byWord.get(guessWord);

  if (isCorrectGuess(guessWord)) {
    return 100;
  }

  if (!guess && !knownConcepts.has(guessWord)) {
    return 0;
  }

  const guessFeatures = buildFeaturesForConcept(guessWord);
  const targetFeatures = buildFeaturesForConcept(target.word);
  const featureScore = weightedSimilarity(guessFeatures, targetFeatures);
  const directScore = directRelationScore(guessWord, target);
  const charScore = jaccard(uniqueChars(guessWord), uniqueChars(target.word));
  const chapterScore = guess && guess.chapter === target.chapter ? 1 : 0;
  const raw = 0.58 * featureScore + 0.24 * directScore + 0.12 * chapterScore + 0.06 * charScore;
  const curved = Math.pow(Math.min(raw, 0.985), 0.72) * 98;
  const knownFloor = guess ? 4.2 : 1.2;
  return Math.max(knownFloor, Math.min(99.999, curved));
}

function formatScore(score) {
  return `${score.toFixed(4)}%`;
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[char];
  });
}

function classify(score) {
  if (score >= 72) return "hot";
  if (score >= 45) return "warm";
  return "cool";
}

function render() {
  const guessed = state.guesses.length;
  els.guessCount.textContent = `已猜 ${guessed} 次`;
  els.remainingCount.textContent = `剩余 ${Math.max(0, MAX_GUESSES - guessed)} 次`;
  els.progressFill.style.width = `${Math.min(100, (guessed / MAX_GUESSES) * 100)}%`;

  if (!state.guesses.length) {
    els.resultList.innerHTML = '<div class="empty-state">先猜一个词，比如“细胞膜”“基因”“生态系统”。</div>';
    return;
  }

  const rows = [...state.guesses].sort((a, b) => b.score - a.score);
  els.resultList.innerHTML = rows
    .map(
      (item) => `
        <div class="result-row ${classify(item.score)}">
          <div class="word-cell">
            <span class="guess-word">${escapeHTML(item.word)}</span>
            <span class="guess-reason">${escapeHTML(item.reason)}</span>
          </div>
          <div class="score-cell">
            <span class="score-fill" style="--score-width:${Math.max(4, item.score)}%"></span>
            <span class="score-text">${formatScore(item.score)}</span>
          </div>
        </div>
      `
    )
    .join("");
}

function startGame(keepMessage = false) {
  const previous = state.target?.word || "";
  state.target = sampleTarget(previous);
  state.guesses = [];
  state.finished = false;
  state.hintLevel = 0;
  els.input.disabled = false;
  els.input.value = "";
  els.input.focus();
  if (!keepMessage) {
    els.message.textContent = "用最少的次数猜到一个隐藏的高中生物词语";
  }
  render();
}

function submitGuess(word) {
  if (state.finished) return;

  const clean = normalizeWord(word);
  if (!clean) {
    els.message.textContent = "先输入一个词语再猜。";
    return;
  }

  if (state.guesses.some((item) => item.word === clean)) {
    els.message.textContent = "这个词已经猜过了，换一个角度试试。";
    els.input.select();
    return;
  }

  const score = scoreGuess(clean);
  state.guesses.push({ word: clean, score, reason: explainGuess(clean, score) });
  els.input.value = "";

  if (isCorrectGuess(clean)) {
    state.finished = true;
    els.input.disabled = true;
    els.message.textContent = `猜中了！答案是「${state.target.word}」，共用了 ${state.guesses.length} 次。`;
  } else if (state.guesses.length >= MAX_GUESSES) {
    state.finished = true;
    els.input.disabled = true;
    els.message.textContent = `次数用完了，答案是「${state.target.word}」。`;
  } else if (score >= 70) {
    els.message.textContent = "非常接近，顺着同一章的核心概念继续猜。";
  } else if (score >= 40) {
    els.message.textContent = "方向不错，目标词和它有明显联系。";
  } else if (score >= 18) {
    els.message.textContent = "有一点关系，但还可以换个模块试试。";
  } else {
    els.message.textContent = "关联度偏低，可能不是这个章节。";
  }

  render();
}

function giveHint() {
  if (state.finished) return;
  state.hintLevel += 1;
  if (state.hintLevel === 1) {
    els.message.textContent = `提示：目标词属于「${state.target.chapter}」模块。`;
    return;
  }
  if (state.hintLevel === 2) {
    els.message.textContent = `提示：它和「${state.target.tags.slice(0, 2).join("、")}」有关。`;
    return;
  }
  const masked = [...state.target.word]
    .map((char, index) => (index === 0 || index === state.target.word.length - 1 ? char : "＿"))
    .join("");
  els.message.textContent = `最后提示：${masked}，共 ${state.target.word.length} 个字/字符。`;
}

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitGuess(els.input.value);
});

els.hintButton.addEventListener("click", giveHint);
els.shuffleButton.addEventListener("click", () => {
  startGame(true);
  els.message.textContent = "已换一个隐藏词。";
});
els.restartButton.addEventListener("click", () => startGame());
els.restartTopButton.addEventListener("click", () => startGame());
els.menuButton.addEventListener("click", () => {
  els.drawer.classList.add("open");
  els.drawer.setAttribute("aria-hidden", "false");
});
els.closeDrawer.addEventListener("click", () => {
  els.drawer.classList.remove("open");
  els.drawer.setAttribute("aria-hidden", "true");
});
els.drawer.addEventListener("click", (event) => {
  if (event.target === els.drawer) {
    els.drawer.classList.remove("open");
    els.drawer.setAttribute("aria-hidden", "true");
  }
});

startGame();
