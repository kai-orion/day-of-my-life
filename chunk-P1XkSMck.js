import{$n as y,$t as hd,A as Kh,B as OT,Cn as ol$1,D as JT,En as pg,Ft as bg,Gt as eg,In as rw,K as PF,Kt as ew,M as Kw,Mn as rd,N as LF,Nt as _w,On as q$1,P as LT,Pn as rg,Qn as xi$1,Rn as sg,Rt as cg,S as GE,Un as tw,_ as FF,_t as WT,a as Aw,at as Tg,d as Dg,dn as kF,fn as kT,gt as WI,hn as mm,ht as W,k as Jh,kt as Zo$1,l as Cg,mn as lg,n as $I,nn as ig,q as PT,r as $u,rn as il$1,un as kD,v as FT,vn as nd,w as Gu,wn as ow,zn as sl$1,zt as cl$1}from"./chunk-DsMSuIEp.js";import{n as a,o as we$1,r as n,t as N}from"./main-AHRWPZQW.js";import{n as Bi$1,o as Ui$1,r as Cr,s as Zi$1,t as $i$1}from"./chunk-COp31mIe.js";import{t as y$1}from"./chunk-C1fG-ATz.js";var c=class j{Key;Value;Unit;toJSON(){return{Key:this.Key,Value:this.Value,Unit:this.Unit}}ToCSSDeclaration({Semicolon:t=!1}={}){return`${this.Key}: ${this.Value}${this.Unit}${t?`;`:``}`}ToCSSVariable(){return`var(${this.Key}, ${this.Value}${this.Unit})`}ToCSSValue(){return`${this.Value}${this.Unit}`}toString(){return this.ToCSSDeclaration()}constructor(t,n,i){this.Key=t,this.Value=n,this.Unit=i}static None=new j(`--md-sys-shape-corner-none`,0,`px`);static ExtraSmall=new j(`--md-sys-shape-corner-extra-small`,4,`px`);static Small=new j(`--md-sys-shape-corner-small`,8,`px`);static Medium=new j(`--md-sys-shape-corner-medium`,12,`px`);static Large=new j(`--md-sys-shape-corner-large`,16,`px`);static LargeIncreased=new j(`--md-sys-shape-corner-large-increased`,20,`px`);static ExtraLarge=new j(`--md-sys-shape-corner-extra-large`,28,`px`);static ExtraLargeIncreased=new j(`--md-sys-shape-corner-extra-large-increased`,32,`px`);static ExtraExtraLarge=new j(`--md-sys-shape-corner-extra-extra-large`,48,`px`);static Full=new j(`--md-sys-shape-corner-full`,`calc(infinity * 1px)`,``);static AllEnums={None:j.None,ExtraSmall:j.ExtraSmall,Small:j.Small,Medium:j.Medium,Large:j.Large,LargeIncreased:j.LargeIncreased,ExtraLarge:j.ExtraLarge,ExtraLargeIncreased:j.ExtraLargeIncreased,ExtraExtraLarge:j.ExtraExtraLarge,Full:j.Full}};var O=class Le{Key;Value;Unit;toJSON(){return{Key:this.Key,Value:this.Value,Unit:this.Unit}}ToCSSDeclaration({Semicolon:t=!1}={}){return`${this.Key}: ${this.Value}${this.Unit}${t?`;`:``}`}ToCSSVariable(){return`var(${this.Key}, ${this.Value}${this.Unit})`}ToCSSValue(){return`${this.Value}${this.Unit}`}toString(){return this.ToCSSDeclaration()}constructor(t,n,i){this.Key=t,this.Value=n,this.Unit=i}static DraggedStateLayerOpacity=new Le(`--md-sys-state-dragged-state-layer-opacity`,.16,``);static PressedStateLayerOpacity=new Le(`--md-sys-state-pressed-state-layer-opacity`,.1,``);static FocusedStateLayerOpacity=new Le(`--md-sys-state-focused-state-layer-opacity`,.1,``);static HoveredStateLayerOpacity=new Le(`--md-sys-state-hovered-state-layer-opacity`,.08,``);static DisabledStateLayerOpacity=new Le(`--md-sys-state-disabled-state-layer-opacity`,.38,``);static FocusIndicator={Thickness:new Le(`--md-sys-state-focus-indicator-thickness`,3,`px`),OuterOffset:new Le(`--md-sys-state-focus-indicator-outer-offset`,2,`px`)};static AllEnums={DraggedStateLayerOpacity:this.DraggedStateLayerOpacity,PressedStateLayerOpacity:this.PressedStateLayerOpacity,FocusedStateLayerOpacity:this.FocusedStateLayerOpacity,HoveredStateLayerOpacity:this.HoveredStateLayerOpacity,DisabledStateLayerOpacity:this.DisabledStateLayerOpacity,FocusIndicator:{Thickness:this.FocusIndicator.Thickness,OuterOffset:this.FocusIndicator.OuterOffset}}};var x=class dt{Key;Value;toJSON(){return{Key:this.Key,Value:this.Value}}ToCSSDeclaration({Semicolon:t=!1}={}){return`${this.Key}: ${this.Value}${t?`;`:``}`}ToCSSVariable(){return`var(${this.Key}, ${this.Value})`}toString(){return this.ToCSSDeclaration()}constructor(t,n){this.Key=t,this.Value=n}static FontBrand=new dt(`--md-ref-typeface-font-brand`,`Roboto`);static FontPlain=new dt(`--md-ref-typeface-font-plain`,`Roboto`);static WeightBold=new dt(`--md-ref-typeface-weight-bold`,700);static WeightMedium=new dt(`--md-ref-typeface-weight-medium`,500);static WeightRegular=new dt(`--md-ref-typeface-weight-regular`,400);static AllEnums={FontBrand:this.FontBrand,FontPlain:this.FontPlain,WeightBold:this.WeightBold,WeightMedium:this.WeightMedium,WeightRegular:this.WeightRegular}};var g=class{Key;Value;Unit;toJSON(){return{Key:this.Key,Value:this.Value,Unit:this.Unit}}ToCSSDeclaration({Semicolon:e=!1}={}){return`${this.Key}: ${this.Value}${this.Unit}${e?`;`:``}`}ToCSSVariable(){return`var(${this.Key}, ${this.Value}${this.Unit})`}ToCSSValue(){return`${this.Value}${this.Unit}`}toString(){return this.ToCSSDeclaration()}constructor(e,t,n){this.Key=e,this.Value=t,this.Unit=n}};var C=class w{Font;FontSize;Tracking;LineHeight;FontWeight;constructor(t,n,i,a,o){this.Font=t,this.FontSize=n,this.Tracking=i,this.LineHeight=a,this.FontWeight=o}static DisplayLarge=new w(x.FontBrand,new g(`--md-sys-typescale-display-large-font-size`,57,`px`),new g(`--md-sys-typescale-display-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-display-large-font-line-height`,64,`px`),x.WeightRegular);static DisplayMedium=new w(x.FontBrand,new g(`--md-sys-typescale-display-medium-font-size`,45,`px`),new g(`--md-sys-typescale-display-medium-font-tracking`,0,`px`),new g(`--md-sys-typescale-display-medium-font-line-height`,52,`px`),x.WeightRegular);static DisplaySmall=new w(x.FontBrand,new g(`--md-sys-typescale-display-small-font-size`,36,`px`),new g(`--md-sys-typescale-display-small-font-tracking`,0,`px`),new g(`--md-sys-typescale-display-small-font-line-height`,44,`px`),x.WeightRegular);static HeadlineLarge=new w(x.FontBrand,new g(`--md-sys-typescale-headline-large-font-size`,32,`px`),new g(`--md-sys-typescale-headline-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-headline-large-font-line-height`,40,`px`),x.WeightRegular);static HeadlineMedium=new w(x.FontBrand,new g(`--md-sys-typescale-headline-medium-font-size`,28,`px`),new g(`--md-sys-typescale-headline-medium-font-tracking`,0,`px`),new g(`--md-sys-typescale-headline-medium-font-line-height`,36,`px`),x.WeightRegular);static HeadlineSmall=new w(x.FontBrand,new g(`--md-sys-typescale-headline-small-font-size`,24,`px`),new g(`--md-sys-typescale-headline-small-font-tracking`,0,`px`),new g(`--md-sys-typescale-headline-small-font-line-height`,32,`px`),x.WeightRegular);static TitleLarge=new w(x.FontBrand,new g(`--md-sys-typescale-title-large-font-size`,22,`px`),new g(`--md-sys-typescale-title-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-title-large-font-line-height`,28,`px`),x.WeightRegular);static TitleMedium=new w(x.FontPlain,new g(`--md-sys-typescale-title-medium-font-size`,16,`px`),new g(`--md-sys-typescale-title-medium-font-tracking`,0,`px`),new g(`--md-sys-typescale-title-medium-font-line-height`,24,`px`),x.WeightMedium);static TitleSmall=new w(x.FontPlain,new g(`--md-sys-typescale-title-small-font-size`,14,`px`),new g(`--md-sys-typescale-title-small-font-tracking`,0,`px`),new g(`--md-sys-typescale-title-small-font-line-height`,20,`px`),x.WeightMedium);static BodyLarge=new w(x.FontPlain,new g(`--md-sys-typescale-body-large-font-size`,16,`px`),new g(`--md-sys-typescale-body-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-body-large-font-line-height`,24,`px`),x.WeightRegular);static BodyMedium=new w(x.FontPlain,new g(`--md-sys-typescale-body-medium-font-size`,14,`px`),new g(`--md-sys-typescale-body-medium-font-tracking`,0,`px`),new g(`--md-sys-typescale-body-medium-font-line-height`,20,`px`),x.WeightRegular);static BodySmall=new w(x.FontPlain,new g(`--md-sys-typescale-body-small-font-size`,12,`px`),new g(`--md-sys-typescale-body-small-font-tracking`,.1,`px`),new g(`--md-sys-typescale-body-small-font-line-height`,16,`px`),x.WeightRegular);static LabelLarge=new w(x.FontPlain,new g(`--md-sys-typescale-label-large-font-size`,14,`px`),new g(`--md-sys-typescale-label-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-label-large-font-line-height`,20,`px`),x.WeightMedium);static LabelMedium=new w(x.FontPlain,new g(`--md-sys-typescale-label-medium-font-size`,12,`px`),new g(`--md-sys-typescale-label-medium-font-tracking`,.1,`px`),new g(`--md-sys-typescale-label-medium-font-line-height`,16,`px`),x.WeightBold);static LabelSmall=new w(x.FontPlain,new g(`--md-sys-typescale-label-small-font-size`,11,`px`),new g(`--md-sys-typescale-label-small-font-tracking`,.1,`px`),new g(`--md-sys-typescale-label-small-font-line-height`,16,`px`),x.WeightBold);static EmphasizedDisplayLarge=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-display-large-font-size`,57,`px`),new g(`--md-sys-typescale-emphasized-display-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-display-large-font-line-height`,64,`px`),x.WeightMedium);static EmphasizedDisplayMedium=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-display-medium-font-size`,45,`px`),new g(`--md-sys-typescale-emphasized-display-medium-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-display-medium-font-line-height`,52,`px`),x.WeightMedium);static EmphasizedDisplaySmall=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-display-small-font-size`,36,`px`),new g(`--md-sys-typescale-emphasized-display-small-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-display-small-font-line-height`,44,`px`),x.WeightMedium);static EmphasizedHeadlineLarge=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-headline-large-font-size`,32,`px`),new g(`--md-sys-typescale-emphasized-headline-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-headline-large-font-line-height`,40,`px`),x.WeightMedium);static EmphasizedHeadlineMedium=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-headline-medium-font-size`,28,`px`),new g(`--md-sys-typescale-emphasized-headline-medium-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-headline-medium-font-line-height`,36,`px`),x.WeightMedium);static EmphasizedHeadlineSmall=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-headline-small-font-size`,24,`px`),new g(`--md-sys-typescale-emphasized-headline-small-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-headline-small-font-line-height`,32,`px`),x.WeightMedium);static EmphasizedTitleLarge=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-title-large-font-size`,22,`px`),new g(`--md-sys-typescale-emphasized-title-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-title-large-font-line-height`,28,`px`),x.WeightMedium);static EmphasizedTitleMedium=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-title-medium-font-size`,16,`px`),new g(`--md-sys-typescale-emphasized-title-medium-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-title-medium-font-line-height`,24,`px`),x.WeightBold);static EmphasizedTitleSmall=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-title-small-font-size`,14,`px`),new g(`--md-sys-typescale-emphasized-title-small-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-title-small-font-line-height`,20,`px`),x.WeightBold);static EmphasizedBodyLarge=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-body-large-font-size`,16,`px`),new g(`--md-sys-typescale-emphasized-body-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-body-large-font-line-height`,24,`px`),x.WeightMedium);static EmphasizedBodyMedium=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-body-medium-font-size`,14,`px`),new g(`--md-sys-typescale-emphasized-body-medium-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-body-medium-font-line-height`,20,`px`),x.WeightMedium);static EmphasizedBodySmall=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-body-small-font-size`,12,`px`),new g(`--md-sys-typescale-emphasized-body-small-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-body-small-font-line-height`,16,`px`),x.WeightMedium);static EmphasizedLabelLarge=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-label-large-font-size`,14,`px`),new g(`--md-sys-typescale-emphasized-label-large-font-tracking`,0,`px`),new g(`--md-sys-typescale-emphasized-label-large-font-line-height`,20,`px`),x.WeightBold);static EmphasizedLabelMedium=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-label-medium-font-size`,12,`px`),new g(`--md-sys-typescale-emphasized-label-medium-font-tracking`,.1,`px`),new g(`--md-sys-typescale-emphasized-label-medium-font-line-height`,16,`px`),x.WeightBold);static EmphasizedLabelSmall=new w(x.FontPlain,new g(`--md-sys-typescale-emphasized-label-small-font-size`,11,`px`),new g(`--md-sys-typescale-emphasized-label-small-font-tracking`,.1,`px`),new g(`--md-sys-typescale-emphasized-label-small-font-line-height`,16,`px`),x.WeightBold);static AllEnums={DisplayLarge:w.DisplayLarge,DisplayMedium:w.DisplayMedium,DisplaySmall:w.DisplaySmall,HeadlineLarge:w.HeadlineLarge,HeadlineMedium:w.HeadlineMedium,HeadlineSmall:w.HeadlineSmall,TitleLarge:w.TitleLarge,TitleMedium:w.TitleMedium,TitleSmall:w.TitleSmall,BodyLarge:w.BodyLarge,BodyMedium:w.BodyMedium,BodySmall:w.BodySmall,LabelLarge:w.LabelLarge,LabelMedium:w.LabelMedium,LabelSmall:w.LabelSmall,EmphasizedDisplayLarge:w.EmphasizedDisplayLarge,EmphasizedDisplayMedium:w.EmphasizedDisplayMedium,EmphasizedDisplaySmall:w.EmphasizedDisplaySmall,EmphasizedHeadlineLarge:w.EmphasizedHeadlineLarge,EmphasizedHeadlineMedium:w.EmphasizedHeadlineMedium,EmphasizedHeadlineSmall:w.EmphasizedHeadlineSmall,EmphasizedTitleLarge:w.EmphasizedTitleLarge,EmphasizedTitleMedium:w.EmphasizedTitleMedium,EmphasizedTitleSmall:w.EmphasizedTitleSmall,EmphasizedBodyLarge:w.EmphasizedBodyLarge,EmphasizedBodyMedium:w.EmphasizedBodyMedium,EmphasizedBodySmall:w.EmphasizedBodySmall,EmphasizedLabelLarge:w.EmphasizedLabelLarge,EmphasizedLabelMedium:w.EmphasizedLabelMedium,EmphasizedLabelSmall:w.EmphasizedLabelSmall}};var ni={PrimaryKeyColor:{Key:`--md-sys-color-primary-key-color`,Value:`#039d54`},SecondaryKeyColor:{Key:`--md-sys-color-secondary-key-color`,Value:`#54815f`},TertiaryKeyColor:{Key:`--md-sys-color-tertiary-key-color`,Value:`#ffa97f`},ErrorKeyColor:{Key:`--md-sys-color-error-key-color`,Value:`#de3730`},NeutralKeyColor:{Key:`--md-sys-color-neutral-key-color`,Value:`#727971`},NeutralVariantKeyColor:{Key:`--md-sys-color-neutral-variant-key-color`,Value:`#6d7a6e`},Background:{Key:`--md-sys-color-background`,Value:`light-dark(#f4fbf1, #0e150f)`},Error:{Key:`--md-sys-color-error`,Value:`light-dark(#ba1a1a, #ffb4ab)`},ErrorContainer:{Key:`--md-sys-color-error-container`,Value:`light-dark(#ffdad6, #93000a)`},ErrorDim:{Key:`--md-sys-color-error-dim`,Value:`light-dark(#a80710, #ff554a)`},InverseOnSurface:{Key:`--md-sys-color-inverse-on-surface`,Value:`light-dark(#ecf3e9, #2b322c)`},InversePrimary:{Key:`--md-sys-color-inverse-primary`,Value:`light-dark(#61de8c, #006d38)`},InverseSurface:{Key:`--md-sys-color-inverse-surface`,Value:`light-dark(#2b322c, #dde4db)`},OnBackground:{Key:`--md-sys-color-on-background`,Value:`light-dark(#171d17, #dde4db)`},OnError:{Key:`--md-sys-color-on-error`,Value:`light-dark(#ffffff, #690005)`},OnErrorContainer:{Key:`--md-sys-color-on-error-container`,Value:`light-dark(#93000a, #ffdad6)`},OnPrimary:{Key:`--md-sys-color-on-primary`,Value:`light-dark(#ffffff, #00391a)`},OnPrimaryContainer:{Key:`--md-sys-color-on-primary-container`,Value:`light-dark(#00592c, #00592c)`},OnPrimaryFixed:{Key:`--md-sys-color-on-primary-fixed`,Value:`light-dark(#00210d, #00210d)`},OnPrimaryFixedVariant:{Key:`--md-sys-color-on-primary-fixed-variant`,Value:`light-dark(#005229, #005229)`},OnSecondary:{Key:`--md-sys-color-on-secondary`,Value:`light-dark(#ffffff, #0a381c)`},OnSecondaryContainer:{Key:`--md-sys-color-on-secondary-container`,Value:`light-dark(#406c4b, #97c7a0)`},OnSecondaryFixed:{Key:`--md-sys-color-on-secondary-fixed`,Value:`light-dark(#00210d, #00210d)`},OnSecondaryFixedVariant:{Key:`--md-sys-color-on-secondary-fixed-variant`,Value:`light-dark(#244f31, #244f31)`},OnSurface:{Key:`--md-sys-color-on-surface`,Value:`light-dark(#171d17, #dde4db)`},OnSurfaceVariant:{Key:`--md-sys-color-on-surface-variant`,Value:`light-dark(#3d4a3f, #bccabc)`},OnTertiary:{Key:`--md-sys-color-on-tertiary`,Value:`light-dark(#ffffff, #552002)`},OnTertiaryContainer:{Key:`--md-sys-color-on-tertiary-container`,Value:`light-dark(#793c1a, #793c1a)`},OnTertiaryFixed:{Key:`--md-sys-color-on-tertiary-fixed`,Value:`light-dark(#351000, #351000)`},OnTertiaryFixedVariant:{Key:`--md-sys-color-on-tertiary-fixed-variant`,Value:`light-dark(#723615, #723615)`},Outline:{Key:`--md-sys-color-outline`,Value:`light-dark(#6d7a6e, #879487)`},OutlineVariant:{Key:`--md-sys-color-outline-variant`,Value:`light-dark(#bccabc, #3d4a3f)`},Primary:{Key:`--md-sys-color-primary`,Value:`light-dark(#006d38, #76f29e)`},PrimaryContainer:{Key:`--md-sys-color-primary-container`,Value:`light-dark(#58d584, #58d584)`},PrimaryDim:{Key:`--md-sys-color-primary-dim`,Value:`light-dark(#006030, #82fea8)`},PrimaryFixed:{Key:`--md-sys-color-primary-fixed`,Value:`light-dark(#7ffba6, #7ffba6)`},PrimaryFixedDim:{Key:`--md-sys-color-primary-fixed-dim`,Value:`light-dark(#61de8c, #61de8c)`},Scrim:{Key:`--md-sys-color-scrim`,Value:`light-dark(#000000, #000000)`},Secondary:{Key:`--md-sys-color-secondary`,Value:`light-dark(#3c6847, #a2d2ab)`},SecondaryContainer:{Key:`--md-sys-color-secondary-container`,Value:`light-dark(#bbecc3, #295436)`},SecondaryDim:{Key:`--md-sys-color-secondary-dim`,Value:`light-dark(#305b3c, #bdeec5)`},SecondaryFixed:{Key:`--md-sys-color-secondary-fixed`,Value:`light-dark(#bdeec5, #bdeec5)`},SecondaryFixedDim:{Key:`--md-sys-color-secondary-fixed-dim`,Value:`light-dark(#a2d2ab, #a2d2ab)`},Shadow:{Key:`--md-sys-color-shadow`,Value:`light-dark(#000000, #000000)`},Surface:{Key:`--md-sys-color-surface`,Value:`light-dark(#f4fbf1, #0e150f)`},SurfaceBright:{Key:`--md-sys-color-surface-bright`,Value:`light-dark(#f4fbf1, #343b34)`},SurfaceContainer:{Key:`--md-sys-color-surface-container`,Value:`light-dark(#e9f0e6, #1b211b)`},SurfaceContainerHigh:{Key:`--md-sys-color-surface-container-high`,Value:`light-dark(#e3eae1, #252c25)`},SurfaceContainerHighest:{Key:`--md-sys-color-surface-container-highest`,Value:`light-dark(#dde4db, #303630)`},SurfaceContainerLow:{Key:`--md-sys-color-surface-container-low`,Value:`light-dark(#eff6ec, #171d17)`},SurfaceContainerLowest:{Key:`--md-sys-color-surface-container-lowest`,Value:`light-dark(#ffffff, #09100a)`},SurfaceDim:{Key:`--md-sys-color-surface-dim`,Value:`light-dark(#d5dcd3, #0e150f)`},SurfaceTint:{Key:`--md-sys-color-surface-tint`,Value:`light-dark(#006d38, #61de8c)`},SurfaceVariant:{Key:`--md-sys-color-surface-variant`,Value:`light-dark(#d8e6d7, #3d4a3f)`},Tertiary:{Key:`--md-sys-color-tertiary`,Value:`light-dark(#8f4d2a, #ffcfba)`},TertiaryContainer:{Key:`--md-sys-color-tertiary-container`,Value:`light-dark(#ffa97f, #ffa97f)`},TertiaryDim:{Key:`--md-sys-color-tertiary-dim`,Value:`light-dark(#804120, #fda77d)`},TertiaryFixed:{Key:`--md-sys-color-tertiary-fixed`,Value:`light-dark(#ffdbcc, #ffdbcc)`},TertiaryFixedDim:{Key:`--md-sys-color-tertiary-fixed-dim`,Value:`light-dark(#ffb693, #ffb693)`}};var co=class{Key;Value;toJSON(){return{Key:this.Key,Value:this.Value}}toString(){return this.Value}ToCSSDeclaration({Semicolon:e=!1}={}){return`${this.Key}: ${this.Value}${e?`;`:``}`}ToCSSVariable(){return`var(${this.Key}, ${this.Value})`}constructor(e,t){this.Key=e,this.Value=t}};var ii=class zr{contract;constructor(t){this.contract=t}static From(t={}){let n=W(W({},ni),t),i=Object.fromEntries(Object.entries(n).map(([a,o])=>[a,new co(o.Key,o.Value)]));return new zr(i)}get PrimaryKeyColor(){return this.contract.PrimaryKeyColor}get SecondaryKeyColor(){return this.contract.SecondaryKeyColor}get TertiaryKeyColor(){return this.contract.TertiaryKeyColor}get ErrorKeyColor(){return this.contract.ErrorKeyColor}get NeutralKeyColor(){return this.contract.NeutralKeyColor}get NeutralVariantKeyColor(){return this.contract.NeutralVariantKeyColor}get Background(){return this.contract.Background}get Error(){return this.contract.Error}get ErrorContainer(){return this.contract.ErrorContainer}get ErrorDim(){return this.contract.ErrorDim}get InverseOnSurface(){return this.contract.InverseOnSurface}get InversePrimary(){return this.contract.InversePrimary}get InverseSurface(){return this.contract.InverseSurface}get OnBackground(){return this.contract.OnBackground}get OnError(){return this.contract.OnError}get OnErrorContainer(){return this.contract.OnErrorContainer}get OnPrimary(){return this.contract.OnPrimary}get OnPrimaryContainer(){return this.contract.OnPrimaryContainer}get OnPrimaryFixed(){return this.contract.OnPrimaryFixed}get OnPrimaryFixedVariant(){return this.contract.OnPrimaryFixedVariant}get OnSecondary(){return this.contract.OnSecondary}get OnSecondaryContainer(){return this.contract.OnSecondaryContainer}get OnSecondaryFixed(){return this.contract.OnSecondaryFixed}get OnSecondaryFixedVariant(){return this.contract.OnSecondaryFixedVariant}get OnSurface(){return this.contract.OnSurface}get OnSurfaceVariant(){return this.contract.OnSurfaceVariant}get OnTertiary(){return this.contract.OnTertiary}get OnTertiaryContainer(){return this.contract.OnTertiaryContainer}get OnTertiaryFixed(){return this.contract.OnTertiaryFixed}get OnTertiaryFixedVariant(){return this.contract.OnTertiaryFixedVariant}get Outline(){return this.contract.Outline}get OutlineVariant(){return this.contract.OutlineVariant}get Primary(){return this.contract.Primary}get PrimaryContainer(){return this.contract.PrimaryContainer}get PrimaryDim(){return this.contract.PrimaryDim}get PrimaryFixed(){return this.contract.PrimaryFixed}get PrimaryFixedDim(){return this.contract.PrimaryFixedDim}get Scrim(){return this.contract.Scrim}get Secondary(){return this.contract.Secondary}get SecondaryContainer(){return this.contract.SecondaryContainer}get SecondaryDim(){return this.contract.SecondaryDim}get SecondaryFixed(){return this.contract.SecondaryFixed}get SecondaryFixedDim(){return this.contract.SecondaryFixedDim}get Shadow(){return this.contract.Shadow}get Surface(){return this.contract.Surface}get SurfaceBright(){return this.contract.SurfaceBright}get SurfaceContainer(){return this.contract.SurfaceContainer}get SurfaceContainerHigh(){return this.contract.SurfaceContainerHigh}get SurfaceContainerHighest(){return this.contract.SurfaceContainerHighest}get SurfaceContainerLow(){return this.contract.SurfaceContainerLow}get SurfaceContainerLowest(){return this.contract.SurfaceContainerLowest}get SurfaceDim(){return this.contract.SurfaceDim}get SurfaceTint(){return this.contract.SurfaceTint}get SurfaceVariant(){return this.contract.SurfaceVariant}get Tertiary(){return this.contract.Tertiary}get TertiaryContainer(){return this.contract.TertiaryContainer}get TertiaryDim(){return this.contract.TertiaryDim}get TertiaryFixed(){return this.contract.TertiaryFixed}get TertiaryFixedDim(){return this.contract.TertiaryFixedDim}get AllEnums(){return{PrimaryKeyColor:this.PrimaryKeyColor,SecondaryKeyColor:this.SecondaryKeyColor,TertiaryKeyColor:this.TertiaryKeyColor,ErrorKeyColor:this.ErrorKeyColor,NeutralKeyColor:this.NeutralKeyColor,NeutralVariantKeyColor:this.NeutralVariantKeyColor,Background:this.Background,Error:this.Error,ErrorContainer:this.ErrorContainer,ErrorDim:this.ErrorDim,InverseOnSurface:this.InverseOnSurface,InversePrimary:this.InversePrimary,InverseSurface:this.InverseSurface,OnBackground:this.OnBackground,OnError:this.OnError,OnErrorContainer:this.OnErrorContainer,OnPrimary:this.OnPrimary,OnPrimaryContainer:this.OnPrimaryContainer,OnPrimaryFixed:this.OnPrimaryFixed,OnPrimaryFixedVariant:this.OnPrimaryFixedVariant,OnSecondary:this.OnSecondary,OnSecondaryContainer:this.OnSecondaryContainer,OnSecondaryFixed:this.OnSecondaryFixed,OnSecondaryFixedVariant:this.OnSecondaryFixedVariant,OnSurface:this.OnSurface,OnSurfaceVariant:this.OnSurfaceVariant,OnTertiary:this.OnTertiary,OnTertiaryContainer:this.OnTertiaryContainer,OnTertiaryFixed:this.OnTertiaryFixed,OnTertiaryFixedVariant:this.OnTertiaryFixedVariant,Outline:this.Outline,OutlineVariant:this.OutlineVariant,Primary:this.Primary,PrimaryContainer:this.PrimaryContainer,PrimaryDim:this.PrimaryDim,PrimaryFixed:this.PrimaryFixed,PrimaryFixedDim:this.PrimaryFixedDim,Scrim:this.Scrim,Secondary:this.Secondary,SecondaryContainer:this.SecondaryContainer,SecondaryDim:this.SecondaryDim,SecondaryFixed:this.SecondaryFixed,SecondaryFixedDim:this.SecondaryFixedDim,Shadow:this.Shadow,Surface:this.Surface,SurfaceBright:this.SurfaceBright,SurfaceContainer:this.SurfaceContainer,SurfaceContainerHigh:this.SurfaceContainerHigh,SurfaceContainerHighest:this.SurfaceContainerHighest,SurfaceContainerLow:this.SurfaceContainerLow,SurfaceContainerLowest:this.SurfaceContainerLowest,SurfaceDim:this.SurfaceDim,SurfaceTint:this.SurfaceTint,SurfaceVariant:this.SurfaceVariant,Tertiary:this.Tertiary,TertiaryContainer:this.TertiaryContainer,TertiaryDim:this.TertiaryDim,TertiaryFixed:this.TertiaryFixed,TertiaryFixedDim:this.TertiaryFixedDim}}};var ri=class F{Key;Value;Unit;toJSON(){return{Key:this.Key,Value:this.Value,Unit:this.Unit}}ToCSSDeclaration({Semicolon:t=!1}={}){return`${this.Key}: ${this.Value}${this.Unit}${t?`;`:``}`}ToCSSVariable(){return`var(${this.Key}, ${this.Value}${this.Unit})`}ToCSSValue(){return`${this.Value}${this.Unit}`}toString(){return this.ToCSSDeclaration()}constructor(t,n,i){this.Key=t,this.Value=n,this.Unit=i}static Short1=new F(`--md-sys-motion-duration-short1`,50,`ms`);static Short2=new F(`--md-sys-motion-duration-short2`,100,`ms`);static Short3=new F(`--md-sys-motion-duration-short3`,150,`ms`);static Short4=new F(`--md-sys-motion-duration-short4`,200,`ms`);static Medium1=new F(`--md-sys-motion-duration-medium1`,250,`ms`);static Medium2=new F(`--md-sys-motion-duration-medium2`,300,`ms`);static Medium3=new F(`--md-sys-motion-duration-medium3`,350,`ms`);static Medium4=new F(`--md-sys-motion-duration-medium4`,400,`ms`);static Long1=new F(`--md-sys-motion-duration-long1`,450,`ms`);static Long2=new F(`--md-sys-motion-duration-long2`,500,`ms`);static Long3=new F(`--md-sys-motion-duration-long3`,550,`ms`);static Long4=new F(`--md-sys-motion-duration-long4`,600,`ms`);static ExtraLong1=new F(`--md-sys-motion-duration-extra-long1`,700,`ms`);static ExtraLong2=new F(`--md-sys-motion-duration-extra-long2`,800,`ms`);static ExtraLong3=new F(`--md-sys-motion-duration-extra-long3`,900,`ms`);static ExtraLong4=new F(`--md-sys-motion-duration-extra-long4`,1e3,`ms`);static ExpressiveFastSpatial=new F(`--md-sys-motion-duration-expressive-fast-spatial`,350,`ms`);static ExpressiveDefaultSpatial=new F(`--md-sys-motion-duration-expressive-default-spatial`,500,`ms`);static ExpressiveSlowSpatial=new F(`--md-sys-motion-duration-expressive-slow-spatial`,650,`ms`);static ExpressiveFastEffects=new F(`--md-sys-motion-duration-expressive-fast-effects`,150,`ms`);static ExpressiveDefaultEffects=new F(`--md-sys-motion-duration-expressive-default-effects`,200,`ms`);static ExpressiveSlowEffects=new F(`--md-sys-motion-duration-expressive-slow-effects`,300,`ms`);static StandardFastSpatial=new F(`--md-sys-motion-duration-standard-fast-spatial`,350,`ms`);static StandardDefaultSpatial=new F(`--md-sys-motion-duration-standard-default-spatial`,500,`ms`);static StandardSlowSpatial=new F(`--md-sys-motion-duration-standard-slow-spatial`,750,`ms`);static StandardFastEffects=new F(`--md-sys-motion-duration-standard-fast-effects`,150,`ms`);static StandardDefaultEffects=new F(`--md-sys-motion-duration-standard-default-effects`,200,`ms`);static StandardSlowEffects=new F(`--md-sys-motion-duration-standard-slow-effects`,300,`ms`);static AllEnums={Short1:this.Short1,Short2:this.Short2,Short3:this.Short3,Short4:this.Short4,Medium1:this.Medium1,Medium2:this.Medium2,Medium3:this.Medium3,Medium4:this.Medium4,Long1:this.Long1,Long2:this.Long2,Long3:this.Long3,Long4:this.Long4,ExtraLong1:this.ExtraLong1,ExtraLong2:this.ExtraLong2,ExtraLong3:this.ExtraLong3,ExtraLong4:this.ExtraLong4,ExpressiveFastSpatial:this.ExpressiveFastSpatial,ExpressiveDefaultSpatial:this.ExpressiveDefaultSpatial,ExpressiveSlowSpatial:this.ExpressiveSlowSpatial,ExpressiveFastEffects:this.ExpressiveFastEffects,ExpressiveDefaultEffects:this.ExpressiveDefaultEffects,ExpressiveSlowEffects:this.ExpressiveSlowEffects,StandardFastSpatial:this.StandardFastSpatial,StandardDefaultSpatial:this.StandardDefaultSpatial,StandardSlowSpatial:this.StandardSlowSpatial,StandardFastEffects:this.StandardFastEffects,StandardDefaultEffects:this.StandardDefaultEffects,StandardSlowEffects:this.StandardSlowEffects}};var ai=class N{Key;Value;toJSON(){return{Key:this.Key,Value:this.Value}}ToCSSDeclaration({Semicolon:t=!1}={}){let n=`cubic-bezier(${this.Value[0]}, ${this.Value[1]}, ${this.Value[2]}, ${this.Value[3]})`;return`${this.Key}: ${n}${t?`;`:``}`}ToCSSVariable(){let t=`cubic-bezier(${this.Value[0]}, ${this.Value[1]}, ${this.Value[2]}, ${this.Value[3]})`;return`var(${this.Key}, ${t})`}ToCSSValue(){return`cubic-bezier(${this.Value})`}toString(){return this.ToCSSDeclaration()}constructor(t,n){this.Key=t,this.Value=n}static Standard=new N(`--md-sys-motion-easing-standard`,[.2,0,0,1]);static StandardAccelerate=new N(`--md-sys-motion-easing-standard-accelerate`,[.3,0,1,1]);static StandardDecelerate=new N(`--md-sys-motion-easing-standard-decelerate`,[0,0,0,1]);static Emphasized=new N(`--md-sys-motion-easing-emphasized`,[.2,0,0,1]);static EmphasizedAccelerate=new N(`--md-sys-motion-easing-emphasized-accelerate`,[.3,0,.8,.15]);static EmphasizedDecelerate=new N(`--md-sys-motion-easing-emphasized-decelerate`,[.05,.7,.1,1]);static Legacy=new N(`--md-sys-motion-easing-legacy`,[.4,0,.2,1]);static LegacyAccelerate=new N(`--md-sys-motion-easing-legacy-accelerate`,[.4,0,1,1]);static LegacyDecelerate=new N(`--md-sys-motion-easing-legacy-decelerate`,[0,0,.2,1]);static Linear=new N(`--md-sys-motion-easing-linear`,[0,0,1,1]);static ExpressiveFastSpatial=new N(`--md-sys-motion-easing-expressive-fast-spatial`,[.42,1.67,.21,.9]);static ExpressiveDefaultSpatial=new N(`--md-sys-motion-easing-expressive-default-spatial`,[.38,1.21,.22,1]);static ExpressiveSlowSpatial=new N(`--md-sys-motion-easing-expressive-slow-spatial`,[.39,1.29,.35,.98]);static ExpressiveFastEffects=new N(`--md-sys-motion-easing-expressive-fast-effects`,[.31,.94,.34,1]);static ExpressiveDefaultEffects=new N(`--md-sys-motion-easing-expressive-default-effects`,[.34,.8,.34,1]);static ExpressiveSlowEffects=new N(`--md-sys-motion-easing-expressive-slow-effects`,[.34,.88,.34,1]);static StandardFastSpatial=new N(`--md-sys-motion-easing-standard-fast-spatial`,[.27,1.06,.18,1]);static StandardDefaultSpatial=new N(`--md-sys-motion-easing-standard-default-spatial`,[.27,1.06,.18,1]);static StandardSlowSpatial=new N(`--md-sys-motion-easing-standard-slow-spatial`,[.27,1.06,.18,1]);static StandardFastEffects=new N(`--md-sys-motion-easing-standard-fast-effects`,[.31,.94,.34,1]);static StandardDefaultEffects=new N(`--md-sys-motion-easing-standard-default-effects`,[.34,.8,.34,1]);static StandardSlowEffects=new N(`--md-sys-motion-easing-standard-slow-effects`,[.34,.88,.34,1]);static AllEnums={Standard:this.Standard,StandardAccelerate:this.StandardAccelerate,StandardDecelerate:this.StandardDecelerate,Emphasized:this.Emphasized,EmphasizedAccelerate:this.EmphasizedAccelerate,EmphasizedDecelerate:this.EmphasizedDecelerate,Legacy:this.Legacy,LegacyAccelerate:this.LegacyAccelerate,LegacyDecelerate:this.LegacyDecelerate,Linear:this.Linear,ExpressiveFastSpatial:this.ExpressiveFastSpatial,ExpressiveDefaultSpatial:this.ExpressiveDefaultSpatial,ExpressiveSlowSpatial:this.ExpressiveSlowSpatial,ExpressiveFastEffects:this.ExpressiveFastEffects,ExpressiveDefaultEffects:this.ExpressiveDefaultEffects,ExpressiveSlowEffects:this.ExpressiveSlowEffects,StandardFastSpatial:this.StandardFastSpatial,StandardDefaultSpatial:this.StandardDefaultSpatial,StandardSlowSpatial:this.StandardSlowSpatial,StandardFastEffects:this.StandardFastEffects,StandardDefaultEffects:this.StandardDefaultEffects,StandardSlowEffects:this.StandardSlowEffects}};(class Ne{Key;Value;Unit;toJSON(){return{Key:this.Key,Value:this.Value,Unit:this.Unit}}ToCSSDeclaration({Semicolon:t=!1}={}){return`${this.Key}: ${this.Value}${this.Unit}${t?`;`:``}`}ToCSSVariable(){return`var(${this.Key}, ${this.Value}${this.Unit})`}ToCSSValue(){return`${this.Value}${this.Unit}`}toString(){return this.ToCSSDeclaration()}constructor(t,n,i){this.Key=t,this.Value=n,this.Unit=i}static Level0=new Ne(`--md-sys-elevation-level-0`,0,`px`);static Level1=new Ne(`--md-sys-elevation-level-1`,1,`px`);static Level2=new Ne(`--md-sys-elevation-level-2`,3,`px`);static Level3=new Ne(`--md-sys-elevation-level-3`,6,`px`);static Level4=new Ne(`--md-sys-elevation-level-4`,8,`px`);static Level5=new Ne(`--md-sys-elevation-level-5`,12,`px`);toBoxShadow(){switch(this.Value){case 0:return`box-shadow: none`;case 1:return`box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`;case 2:return`box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px`;case 3:return`box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px`;case 4:return`box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px`;case 5:return`box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px`}}static AllEnums={Level0:this.Level0,Level1:this.Level1,Level2:this.Level2,Level3:this.Level3,Level4:this.Level4,Level5:this.Level5}});(class T{Key;Value;Unit;toJSON(){return{Key:this.Key,Value:this.Value,Unit:this.Unit}}ToCSSDeclaration({Semicolon:t=!1}={}){return`${this.Key}: ${this.Value}${this.Unit}${t?`;`:``}`}ToCSSVariable(){return`var(${this.Key}, ${this.Value}${this.Unit})`}ToCSSValue(){return`${this.Value}${this.Unit}`}toString(){return this.ToCSSDeclaration()}constructor(t,n,i){this.Key=t,this.Value=n,this.Unit=i}static Space0=new T(`--md-sys-measurement-space0`,0,`px`);static Space25=new T(`--md-sys-measurement-space25`,2,`px`);static Space50=new T(`--md-sys-measurement-space50`,4,`px`);static Space75=new T(`--md-sys-measurement-space75`,6,`px`);static Space100=new T(`--md-sys-measurement-space100`,8,`px`);static Space125=new T(`--md-sys-measurement-space125`,10,`px`);static Space150=new T(`--md-sys-measurement-space150`,12,`px`);static Space175=new T(`--md-sys-measurement-space175`,14,`px`);static Space200=new T(`--md-sys-measurement-space200`,16,`px`);static Space250=new T(`--md-sys-measurement-space250`,20,`px`);static Space300=new T(`--md-sys-measurement-space300`,24,`px`);static Space400=new T(`--md-sys-measurement-space400`,32,`px`);static Space450=new T(`--md-sys-measurement-space450`,36,`px`);static Space500=new T(`--md-sys-measurement-space500`,40,`px`);static Space600=new T(`--md-sys-measurement-space600`,48,`px`);static Space700=new T(`--md-sys-measurement-space700`,56,`px`);static Space800=new T(`--md-sys-measurement-space800`,64,`px`);static Space900=new T(`--md-sys-measurement-space900`,72,`px`);static AllEnums={Space0:T.Space0,Space25:T.Space25,Space50:T.Space50,Space75:T.Space75,Space100:T.Space100,Space125:T.Space125,Space150:T.Space150,Space175:T.Space175,Space200:T.Space200,Space250:T.Space250,Space300:T.Space300,Space400:T.Space400,Space450:T.Space450,Space500:T.Space500,Space600:T.Space600,Space700:T.Space700,Space800:T.Space800,Space900:T.Space900}});(class G{Key;Value;toJSON(){return{Key:this.Key,Value:this.Value}}constructor(t,n){this.Key=t,this.Value=n}static Monochrome=new G(`Monochrome`,0);static Neutral=new G(`Neutral`,1);static TonalSpot=new G(`TonalSpot`,2);static Vibrant=new G(`Vibrant`,3);static Expressive=new G(`Expressive`,4);static Fidelity=new G(`Fidelity`,5);static Content=new G(`Content`,6);static Rainbow=new G(`Rainbow`,7);static FruitSalad=new G(`FruitSalad`,8);static AllEnums={Monochrome:G.Monochrome,Neutral:G.Neutral,TonalSpot:G.TonalSpot,Vibrant:G.Vibrant,Expressive:G.Expressive,Fidelity:G.Fidelity,Content:G.Content,Rainbow:G.Rainbow,FruitSalad:G.FruitSalad}});var r=ii.From();var fo=e=>{if(typeof e!=`object`||e===null)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null};var mo=e=>{if(typeof e!=`object`||e===null)return!1;let t=e;return typeof t.ToCSSVariable==`function`||`_$cssResult$`in t||`cssText`in t};function H(e){let t={};for(let[a,o]of Object.entries(e??{}))if(o!=null){if(Array.isArray(o)){t[a]=Object.freeze([...o]);continue}if(fo(o)&&!mo(o)){let s={};for(let[l,d]of Object.entries(o))d!=null&&(s[l]=d);t[a]=Object.freeze(s);continue}t[a]=o}let n=Object.freeze(Object.keys(t)),i=W({},t);return Object.defineProperties(i,{__brand:{value:`ResolvedStyleDefinition`,enumerable:!1,writable:!1,configurable:!1},tokens:{value:Object.freeze(W({},t)),enumerable:!1,writable:!1,configurable:!1},flatTokenKeys:{value:n,enumerable:!1,writable:!1,configurable:!1}}),Object.freeze(i)}var Vr=[`start-start`,`start-end`,`end-start`,`end-end`];var Ir={"start-start":[`startStart`,`start-start`],"start-end":[`startEnd`,`start-end`],"end-start":[`endStart`,`end-start`],"end-end":[`endEnd`,`end-end`]};function oi(e){if(typeof e!=`object`||e===null)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function si(e){return typeof e==`object`&&e!==null&&typeof e.ToCSSVariable==`function`}function li(e){return typeof e==`object`&&e!==null&&(`_$cssResult$`in e||`cssText`in e)}function Br(e){if(typeof e!=`string`)throw new Error(`[expandShape] Prefix must be a non-empty string.`);let t=e.trim();if(t.length===0)throw new Error(`[expandShape] Prefix must be a non-empty string.`);let n=t.replace(/^--/,``).replace(/-+$/,``);if(n.length===0)throw new Error(`[expandShape] Prefix must be a non-empty string.`);return n===`shape`||n.endsWith(`-shape`)?n:`${n}-shape`}function ci(e){let t=Br(e);return n=>{if(n==null)throw new Error(`[expandShape] Invalid shape value provided.`);if(Array.isArray(n)){if(n.length===0)throw new Error(`[expandShape] Invalid shape value provided.`);let i=Object.freeze([...n]);return Object.freeze({[`${t}-start-start`]:i,[`${t}-start-end`]:i,[`${t}-end-start`]:i,[`${t}-end-end`]:i})}if(si(n)||li(n))return Object.freeze({[`${t}-start-start`]:n,[`${t}-start-end`]:n,[`${t}-end-start`]:n,[`${t}-end-end`]:n});if(typeof n==`string`){if(n.trim().length===0)throw new Error(`[expandShape] Invalid shape value provided.`);return Object.freeze({[`${t}-start-start`]:n,[`${t}-start-end`]:n,[`${t}-end-start`]:n,[`${t}-end-end`]:n})}if(typeof n==`number`){if(Number.isNaN(n))throw new Error(`[expandShape] Invalid shape value provided.`);return Object.freeze({[`${t}-start-start`]:n,[`${t}-start-end`]:n,[`${t}-end-start`]:n,[`${t}-end-end`]:n})}if(oi(n)){let i=Object.keys(n);if(i.length===0)throw new Error(`[expandShape] Invalid shape value provided.`);if(i.some(l=>l===`startStart`||l===`startEnd`||l===`endStart`||l===`endEnd`||l===`start-start`||l===`start-end`||l===`end-start`||l===`end-end`)){let l={},d=0;for(let f of Vr){let[p,u]=Ir[f],m=n[u]!==void 0?n[u]:n[p];if(m!=null){if(typeof m==`string`&&m.trim().length===0)continue;l[`${t}-${f}`]=Array.isArray(m)?Object.freeze([...m]):oi(m)&&!si(m)&&!li(m)?Object.freeze(W({},m)):m,d++}}if(d===0)throw new Error(`[expandShape] Invalid shape value provided.`);return Object.freeze(l)}let a={},o=0;for(let[l,d]of Object.entries(n))if(d!=null){if(typeof d==`string`&&d.trim().length===0)continue;a[l]=d,o++}if(o===0)throw new Error(`[expandShape] Invalid shape value provided.`);let s=Object.freeze(a);return Object.freeze({[`${t}-start-start`]:s,[`${t}-start-end`]:s,[`${t}-end-start`]:s,[`${t}-end-end`]:s})}throw new Error(`[expandShape] Invalid shape value provided.`)}}var go=new Set([`all`,`block`,`inline`,`blockStart`,`blockEnd`,`inlineStart`,`inlineEnd`,`block-start`,`block-end`,`inline-start`,`inline-end`]);function di(e){return typeof e!=`object`||e===null||Array.isArray(e)?!1:Object.keys(e).some(t=>go.has(t))}function ui(e){return typeof e==`string`||typeof e==`number`||typeof e==`object`&&e!==null&&(typeof e.ToCSSVariable==`function`||`_$cssResult$`in e||`cssText`in e)}function cn(e){if(e==null)throw new Error(`[expandPadding] Padding value cannot be null or undefined.`);if(ui(e))return{blockStart:e,blockEnd:e,inlineStart:e,inlineEnd:e};if(Array.isArray(e)){if(e.length===2)return{blockStart:e[0],blockEnd:e[0],inlineStart:e[1],inlineEnd:e[1]};if(e.length===4)return{blockStart:e[0],blockEnd:e[1],inlineStart:e[2],inlineEnd:e[3]};throw new Error(`[expandPadding] Array input must have length 2 (axis [block, inline]) or 4 (edges [block-start, block-end, inline-start, inline-end]), got length ${e.length}.`)}if(typeof e==`object`){if(Object.keys(e).length===0)throw new Error(`[expandPadding] Padding object cannot be empty.`);let t=e,n=t.block??t.all,i=t.inline??t.all,a=t[`block-start`]??t.blockStart??n,o=t[`block-end`]??t.blockEnd??n,s=t[`inline-start`]??t.inlineStart??i,l=t[`inline-end`]??t.inlineEnd??i,d={};return a!==void 0&&(d.blockStart=a),o!==void 0&&(d.blockEnd=o),s!==void 0&&(d.inlineStart=s),l!==void 0&&(d.inlineEnd=l),d}throw new Error(`[expandPadding] Invalid padding value.`)}function pi(e){if(typeof e!=`string`||e.trim().length===0)throw new Error(`[expandPadding] Prefix must be a non-empty string.`);let t=e.trim().replace(/^--/,``).replace(/-+$/,``);if(t.length===0)throw new Error(`[expandPadding] Prefix must be a non-empty string.`);let n=t.endsWith(`-padding`)?t:t===`padding`?`padding`:`${t}-padding`,i=`${n}-block-start`,a=`${n}-block-end`,o=`${n}-inline-start`,s=`${n}-inline-end`;return l=>{if(l==null)throw new Error(`[expandPadding] Padding value cannot be null or undefined.`);if(Array.isArray(l)&&l.some(p=>Array.isArray(p)||typeof p==`object`&&p!==null&&di(p))){let p=[],u=[],m=[],v=[];for(let $ of l){let P=cn($);p.push(P.blockStart),u.push(P.blockEnd),m.push(P.inlineStart),v.push(P.inlineEnd)}let E={};return p.some($=>$!==void 0)&&(E[i]=Object.freeze(p)),u.some($=>$!==void 0)&&(E[a]=Object.freeze(u)),m.some($=>$!==void 0)&&(E[o]=Object.freeze(m)),v.some($=>$!==void 0)&&(E[s]=Object.freeze(v)),Object.freeze(E)}if(typeof l==`object`&&!Array.isArray(l)&&!ui(l)&&!di(l)){if(Object.keys(l).length===0)throw new Error(`[expandPadding] Padding object cannot be empty.`);let p={},u={},m={},v={};for(let[$,P]of Object.entries(l)){if(P==null)continue;let D=cn(P);D.blockStart!==void 0&&(p[$]=D.blockStart),D.blockEnd!==void 0&&(u[$]=D.blockEnd),D.inlineStart!==void 0&&(m[$]=D.inlineStart),D.inlineEnd!==void 0&&(v[$]=D.inlineEnd)}let E={};return Object.keys(p).length>0&&(E[i]=Object.freeze(p)),Object.keys(u).length>0&&(E[a]=Object.freeze(u)),Object.keys(m).length>0&&(E[o]=Object.freeze(m)),Object.keys(v).length>0&&(E[s]=Object.freeze(v)),Object.freeze(E)}let d=cn(l),f={};return d.blockStart!==void 0&&(f[i]=d.blockStart),d.blockEnd!==void 0&&(f[a]=d.blockEnd),d.inlineStart!==void 0&&(f[o]=d.inlineStart),d.inlineEnd!==void 0&&(f[s]=d.inlineEnd),Object.freeze(f)}}function Ot(e){if(e===null||typeof e!=`object`)return{};let t=e;return{font:t.Font??t.font??t.fontFamily??t[`font-family`]??t.typeface,leading:t.LineHeight??t.lineHeight??t[`line-height`]??t.leading??t.line_height,size:t.FontSize??t.fontSize??t.size??t[`font-size`]??t.font_size,tracking:t.Tracking??t.tracking??t.letterSpacing??t[`letter-space`]??t[`letter-spacing`]??t.letter_spacing,weight:t.FontWeight??t.fontWeight??t.weight??t.font_weight??t[`font-weight`]}}function Nr(e){if(typeof e!=`string`)throw new TypeError(`[expandTypescale] Prefix must be a non-empty string.`);let t=e.trim();if(t===``)throw new TypeError(`[expandTypescale] Prefix must be a non-empty string.`);let n=t.replace(/^--/,``).replace(/-(?:typescale|typography|font|leading|size|tracking|weight)$/i,``).replace(/-+$/,``);if(n===``)throw new TypeError(`[expandTypescale] Prefix cannot be empty after normalization.`);return n}function qr(e){if(e==null)throw new TypeError(`[expandTypescale] Typescale value cannot be null or undefined.`);if(typeof e!=`object`)throw new TypeError(`[expandTypescale] Invalid typescale value: expected a Typescale instance, typography object, tuple, or state record.`)}var Ur=(e,t)=>Array.isArray(e)?e.map(n=>Ur(n,t)):t(e);var hi=e=>t=>{let n=Nr(e);if(qr(t),Array.isArray(t)){if(t.length===0)throw new Error(`[expandTypescale] Tuple of typescale values cannot be empty.`);let p=u=>Ur(t,m=>u(Ot(m)));return{[`${n}-font`]:p(u=>u.font),[`${n}-leading`]:p(u=>u.leading),[`${n}-size`]:p(u=>u.size),[`${n}-tracking`]:p(u=>u.tracking),[`${n}-weight`]:p(u=>u.weight)}}let i=Ot(t);if(i.font!==void 0||i.leading!==void 0||i.size!==void 0||i.tracking!==void 0||i.weight!==void 0)return{[`${n}-font`]:i.font,[`${n}-leading`]:i.leading,[`${n}-size`]:i.size,[`${n}-tracking`]:i.tracking,[`${n}-weight`]:i.weight};let a=Object.entries(t);if(a.length===0)throw new Error(`[expandTypescale] Typescale value object cannot be empty.`);let o={},s={},l={},d={},f={};for(let[p,u]of a)if(Array.isArray(u)){let m=u.map(v=>Ot(v));o[p]=m.map(v=>v.font),s[p]=m.map(v=>v.leading),l[p]=m.map(v=>v.size),d[p]=m.map(v=>v.tracking),f[p]=m.map(v=>v.weight)}else{let m=Ot(u);o[p]=m.font,s[p]=m.leading,l[p]=m.size,d[p]=m.tracking,f[p]=m.weight}return{[`${n}-font`]:o,[`${n}-leading`]:s,[`${n}-size`]:l,[`${n}-tracking`]:d,[`${n}-weight`]:f}};var dn=globalThis;var fi=dn.ShadowRoot&&(dn.ShadyCSS===void 0||dn.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype;var mi=Symbol();var Kr=new WeakMap;var jr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==mi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(fi&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Kr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Kr.set(t,e))}return e}toString(){return this.cssText}};var M=e=>new jr(typeof e==`string`?e:e+``,void 0,mi);var k=(e,...t)=>{return new jr(e.length===1?e[0]:t.reduce(((i,a,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s==`number`)return s;throw Error(`Value passed to 'css' function must be a 'css' function result: `+s+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(a)+e[o+1]),e[0]),e,mi)};var un=(e,t)=>{if(fi)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(let n of t){let i=document.createElement(`style`),a=dn.litNonce;a!==void 0&&i.setAttribute(`nonce`,a),i.textContent=n.cssText,e.appendChild(i)}};var Pt=fi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n=``;for(let i of t.cssRules)n+=i.cssText;return M(n)})(e):e;var{is:yo,defineProperty:bo,getOwnPropertyDescriptor:vo,getOwnPropertyNames:So,getOwnPropertySymbols:xo,getPrototypeOf:wo}=Object,pn=globalThis,Hr=pn.trustedTypes,Co=Hr?Hr.emptyScript:``,Eo=pn.reactiveElementPolyfillSupport,Tt=(e,t)=>e,qe={toAttribute(e,t){switch(t){case Boolean:e=e?Co:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ut=(e,t)=>!yo(e,t),Wr={attribute:!0,type:String,converter:qe,reflect:!1,useDefault:!1,hasChanged:ut};Symbol.metadata??=Symbol(`metadata`),pn.litPropertyMetadata??=new WeakMap;var Ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Wr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&bo(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:a}=vo(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){let s=i?.call(this);a?.call(this,o),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wr}static _$Ei(){if(this.hasOwnProperty(Tt(`elementProperties`)))return;let e=wo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Tt(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tt(`properties`))){let t=this.properties,n=[...So(t),...xo(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Pt(i))}else e!==void 0&&t.push(Pt(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return un(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let a=(n.converter?.toAttribute!==void 0?n.converter:qe).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let a=n.getPropertyOptions(i),o=typeof a.converter==`function`?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:qe;this._$Em=i,this[i]=o.fromAttribute(t,a.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let i=this.constructor,a=this[e];if(n??=i.getPropertyOptions(e),!((n.hasChanged??ut)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:a},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,a]of n){let{wrapped:o}=a,s=this[i];o!==!0||this._$AL.has(i)||s===void 0||this.C(i,void 0,a,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((n=>n.hostUpdate?.())),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Ae.elementStyles=[],Ae.shadowRootOptions={mode:`open`},Ae[Tt(`elementProperties`)]=new Map,Ae[Tt(`finalized`)]=new Map,Eo?.({ReactiveElement:Ae}),(pn.reactiveElementVersions??=[]).push(`2.1.0`);var bi=globalThis;var hn=bi.trustedTypes;var Gr=hn?hn.createPolicy(`lit-html`,{createHTML:e=>e}):void 0;var ea=`$lit$`;var Me=`lit$${Math.random().toFixed(9).slice(2)}$`;var ta=`?`+Me;var $o=`<${ta}>`;var je=document;var Lt=()=>je.createComment(``);var At=e=>e===null||typeof e!=`object`&&typeof e!=`function`;var vi=Array.isArray;var ko=e=>vi(e)||typeof e?.[Symbol.iterator]==`function`;var gi=`[ 	
\f\r]`;var Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;var Yr=/-->/g;var Jr=/>/g;var Ue=RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,`g`);var Zr=/'/g;var Xr=/"/g;var na=/^(?:script|style|textarea|title)$/i;var Si=e=>(t,...n)=>({_$litType$:e,strings:t,values:n});var S=Si(1);var ge=Symbol.for(`lit-noChange`);var _=Symbol.for(`lit-nothing`);var Qr=new WeakMap;var Ke=je.createTreeWalker(je,129);function ia(e,t){if(!vi(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Gr!==void 0?Gr.createHTML(t):t}var _o=(e,t)=>{let n=e.length-1,i=[],a,o=t===2?`<svg>`:t===3?`<math>`:``,s=Dt;for(let l=0;l<n;l++){let d=e[l],f,p,u=-1,m=0;for(;m<d.length&&(s.lastIndex=m,p=s.exec(d),p!==null);)m=s.lastIndex,s===Dt?p[1]===`!--`?s=Yr:p[1]!==void 0?s=Jr:p[2]!==void 0?(na.test(p[2])&&(a=RegExp(`</`+p[2],`g`)),s=Ue):p[3]!==void 0&&(s=Ue):s===Ue?p[0]===`>`?(s=a??Dt,u=-1):p[1]===void 0?u=-2:(u=s.lastIndex-p[2].length,f=p[1],s=p[3]===void 0?Ue:p[3]===`"`?Xr:Zr):s===Xr||s===Zr?s=Ue:s===Yr||s===Jr?s=Dt:(s=Ue,a=void 0);let v=s===Ue&&e[l+1].startsWith(`/>`)?` `:``;o+=s===Dt?d+$o:u>=0?(i.push(f),d.slice(0,u)+ea+d.slice(u)+Me+v):d+Me+(u===-2?l:v)}return[ia(e,o+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),i]};var yi=class ra{constructor({strings:t,_$litType$:n},i){let a;this.parts=[];let o=0,s=0,l=t.length-1,d=this.parts,[f,p]=_o(t,n);if(this.el=ra.createElement(f,i),Ke.currentNode=this.el.content,n===2||n===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=Ke.nextNode())!==null&&d.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let u of a.getAttributeNames())if(u.endsWith(ea)){let m=p[s++],v=a.getAttribute(u).split(Me),E=/([.?@])?(.*)/.exec(m);d.push({type:1,index:o,name:E[2],strings:v,ctor:E[1]===`.`?Po:E[1]===`?`?To:E[1]===`@`?Do:fn}),a.removeAttribute(u)}else u.startsWith(Me)&&(d.push({type:6,index:o}),a.removeAttribute(u));if(na.test(a.tagName)){let u=a.textContent.split(Me),m=u.length-1;if(m>0){a.textContent=hn?hn.emptyScript:``;for(let v=0;v<m;v++)a.append(u[v],Lt()),Ke.nextNode(),d.push({type:2,index:++o});a.append(u[m],Lt())}}}else if(a.nodeType===8)if(a.data===ta)d.push({type:2,index:o});else{let u=-1;for(;(u=a.data.indexOf(Me,u+1))!==-1;)d.push({type:7,index:o}),u+=Me.length-1}o++}}static createElement(t,n){let i=je.createElement(`template`);return i.innerHTML=t,i}};function pt(e,t,n=e,i){if(t===ge)return t;let a=i!==void 0?n._$Co?.[i]:n._$Cl,o=At(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,n,i)),i!==void 0?(n._$Co??=[])[i]=a:n._$Cl=a),a!==void 0&&(t=pt(e,a._$AS(e,t.values),a,i)),t}var Oo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??je).importNode(t,!0);Ke.currentNode=i;let a=Ke.nextNode(),o=0,s=0,l=n[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new xi(a,a.nextSibling,this,e):l.type===1?d=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(d=new Lo(a,this,e)),this._$AV.push(d),l=n[++s]}o!==l?.index&&(a=Ke.nextNode(),o++)}return Ke.currentNode=je,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}};var xi=class aa{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,i,a){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=pt(this,t,n),At(t)?t===_||t==null||t===``?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==ge&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ko(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&At(this._$AH)?this._$AA.nextSibling.data=t:this.T(je.createTextNode(t)),this._$AH=t}$(t){let{values:n,_$litType$:i}=t,a=typeof i==`number`?this._$AC(t):(i.el===void 0&&(i.el=yi.createElement(ia(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(n);else{let o=new Oo(a,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=Qr.get(t.strings);return n===void 0&&Qr.set(t.strings,n=new yi(t)),n}k(t){vi(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,i,a=0;for(let o of t)a===n.length?n.push(i=new aa(this.O(Lt()),this.O(Lt()),this,this.options)):i=n[a],i._$AI(o),a++;a<n.length&&(this._$AR(i&&i._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};var fn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,a){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,i){let a=this.strings,o=!1;if(a===void 0)e=pt(this,e,t,0),o=!At(e)||e!==this._$AH&&e!==ge,o&&(this._$AH=e);else{let s=e,l,d;for(e=a[0],l=0;l<a.length-1;l++)d=pt(this,s[n+l],t,l),d===ge&&(d=this._$AH[l]),o||=!At(d)||d!==this._$AH[l],d===_?e=_:e!==_&&(e+=(d??``)+a[l+1]),this._$AH[l]=d}o&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}};var Po=class extends fn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}};var To=class extends fn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}};var Do=class extends fn{constructor(e,t,n,i,a){super(e,t,n,i,a),this.type=5}_$AI(e,t=this){if((e=pt(this,e,t,0)??_)===ge)return;let n=this._$AH,i=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};var Lo=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){pt(this,e)}};var Ao=bi.litHtmlPolyfillSupport;Ao?.(yi,xi),(bi.litHtmlVersions??=[]).push(`3.3.0`);var wi=(e,t,n)=>{let i=n?.renderBefore??t,a=i._$litPart$;if(a===void 0){let o=n?.renderBefore??null;i._$litPart$=a=new xi(t.insertBefore(Lt(),o),o,void 0,n??{})}return a._$AI(e),a};var Ci=globalThis;var oe=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ge}};oe._$litElement$=!0,oe.finalized=!0,Ci.litElementHydrateSupport?.({LitElement:oe});var Fo=Ci.litElementPolyfillSupport;Fo?.({LitElement:oe});(Ci.litElementVersions??=[]).push(`4.2.0`);var Ro=e=>{if(typeof e==`string`){let o=e.trim();return{prefix:(o.startsWith(`--`)?o:`--${o}`).replace(/-+$/,``),includePublicVars:!0}}let{prefix:t=``,includePublicVars:n=!0,selector:i}=e??{},a=t.trim();return{prefix:(a.startsWith(`--`)?a:`--${a}`).replace(/-+$/,``),includePublicVars:n,selector:i}};var Ei=e=>{if(e==null)return``;if(typeof e==`object`&&e!==null){if(typeof e.ToCSSVariable==`function`)return e.ToCSSVariable();if(`cssText`in e&&typeof e.cssText==`string`)return e.cssText;if(`rawVal`in e)return Ei(e.rawVal)}return String(e)};var zo=e=>{if(typeof e!=`object`||e===null)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null};var Vo=e=>{if(typeof e!=`object`||e===null)return!1;let t=e;return typeof t.ToCSSVariable==`function`||`_$cssResult$`in t||`cssText`in t};var Io=new Set([`__brand`,`schema`,`tokens`,`flatTokenKeys`,`forwardedBridges`]);function Y(e){let t=Ro(e);return n=>{if(!n||typeof n!=`object`)return M(``);let i=`tokens`in n&&typeof n.tokens==`object`&&n.tokens!==null?n.tokens:n,a=[];for(let[o,s]of Object.entries(i)){if(s==null||Io.has(o))continue;let l=o.startsWith(`--`)?o.slice(2):o;if(Array.isArray(s))throw new Error(`[stringifyTokens] Token '${l}' uses an array but the simplified style system holds no schema: only static values and plain records are allowed.`);if(zo(s)&&!Vo(s)){for(let[f,p]of Object.entries(s))if(p!=null){let u=Ei(p);t.includePublicVars?a.push(`--_${f}-${l}: var(${t.prefix}-${f}-${l}, ${u});`):a.push(`--_${f}-${l}: ${u};`)}continue}let d=Ei(s);t.includePublicVars?a.push(`--_${l}: var(${t.prefix}-${l}, ${d});`):a.push(`--_${l}: ${d};`)}if(a.length===0)return M(``);if(t.selector&&t.selector.trim().length>0){let o=a.map(s=>`    ${s}`).join(`
`);return M(`${t.selector} {
${o}
}`)}return M(a.join(`
`))}}var Bo=e=>{if(typeof e==`string`){let a=e.trim();return{prefix:(a.startsWith(`--`)?a:`--${a}`).replace(/-+$/,``)}}let{prefix:t=``,selector:n}=e??{},i=t.trim();return{prefix:(i.startsWith(`--`)?i:`--${i}`).replace(/-+$/,``),selector:n}};var oa=e=>{if(e==null)return``;if(typeof e==`object`&&e!==null){if(typeof e.ToCSSVariable==`function`)return e.ToCSSVariable();if(`cssText`in e&&typeof e.cssText==`string`)return e.cssText;if(`rawVal`in e)return oa(e.rawVal)}return String(e)};function q(e){let t=Bo(e);return n=>i=>{if(!n||typeof n!=`object`)return M(``);let a=[];for(let[o,s]of Object.entries(n)){if(s==null)continue;let l=o.startsWith(`--`)?o.slice(2):o,d=oa(s);d.length>0&&a.push(`${t.prefix}-${l}: ${d};`)}if(a.length===0)return M(``);if(t.selector&&t.selector.trim().length>0){let o=a.map(s=>`    ${s}`).join(`
`);return M(`${t.selector} {
${o}
}`)}return M(a.join(`
`))}}var $i=H({"container-shape-start-start":c.ExtraLarge,"container-shape-start-end":c.ExtraLarge,"container-shape-end-start":c.ExtraLarge,"container-shape-end-end":c.ExtraLarge,"enabled-container-color":r.SurfaceContainerHigh,"enabled-container-elevation":`0`,"container-min-width":`360px`,"container-padding-inline-start":`12px`,"container-padding-inline-end":`12px`,"container-padding-block-start":`0px`,"container-padding-block-end":`0px`,"header-container-height":`120px`,"header-container-padding-block-start":`16px`,"header-container-padding-block-end":`20px`,"header-container-padding-inline-start":`24px`,"header-container-padding-inline-end":`24px`,"nav-container-height":`56px`,"actions-container-height":`60px`,"headline-label-font":C.HeadlineLarge.Font,"headline-label-leading":C.HeadlineLarge.LineHeight,"headline-label-size":C.HeadlineLarge.FontSize,"headline-label-weight":C.HeadlineLarge.FontWeight,"headline-label-tracking":C.HeadlineLarge.Tracking,"enabled-headline-label-color":r.OnSurface,"supporting-text-label-font":C.LabelMedium.Font,"supporting-text-label-leading":C.LabelMedium.LineHeight,"supporting-text-label-size":C.LabelMedium.FontSize,"supporting-text-label-weight":C.LabelMedium.FontWeight,"supporting-text-label-tracking":C.LabelMedium.Tracking,"enabled-supporting-text-label-color":r.OnSurfaceVariant,"weekday-label-font":C.LabelMedium.Font,"weekday-label-leading":C.LabelMedium.LineHeight,"weekday-label-size":C.LabelMedium.FontSize,"weekday-label-weight":C.LabelMedium.FontWeight,"weekday-label-tracking":C.LabelMedium.Tracking,"enabled-weekday-label-color":r.OnSurfaceVariant,"day-label-font":C.BodyLarge.Font,"day-label-leading":C.BodyLarge.LineHeight,"day-label-size":C.BodyLarge.FontSize,"day-label-weight":C.BodyLarge.FontWeight,"day-label-tracking":C.BodyLarge.Tracking,"enabled-day-label-color":r.OnSurface,"enabled-today-day-label-color":r.Primary,"today-day-container-outline-color":r.Primary,"today-day-container-outline-width":`1px`,"enabled-selected-day-container-color":r.Primary,"enabled-selected-day-label-color":r.OnPrimary,"day-container-size":`48px`,"day-node-size":`40px`,"day-container-shape":c.Full,"enabled-outside-month-day-label-color":r.OnSurfaceVariant,"enabled-disabled-day-label-color":r.OnSurface,"enabled-disabled-day-label-opacity":O.DisabledStateLayerOpacity,"enabled-range-container-color":r.PrimaryContainer,"enabled-range-label-color":r.OnPrimaryContainer,"year-label-font":C.BodyLarge.Font,"year-label-leading":C.BodyLarge.LineHeight,"year-label-size":C.BodyLarge.FontSize,"year-label-weight":C.BodyLarge.FontWeight,"year-label-tracking":C.BodyLarge.Tracking,"enabled-year-label-color":r.OnSurface,"enabled-selected-year-container-color":r.Primary,"enabled-selected-year-label-color":r.OnPrimary,"enabled-today-year-label-color":r.Primary,"year-container-width":`72px`,"year-container-height":`40px`,"year-container-shape":c.Full,"enabled-divider-color":r.OutlineVariant,"hovered-day-state-layer-color":r.OnSurface,"hovered-day-state-layer-opacity":O.HoveredStateLayerOpacity,"focused-day-state-layer-color":r.OnSurface,"focused-day-state-layer-opacity":O.FocusedStateLayerOpacity,"pressed-day-state-layer-color":r.OnSurface,"pressed-day-state-layer-opacity":O.PressedStateLayerOpacity,"hovered-year-state-layer-color":r.OnSurface,"hovered-year-state-layer-opacity":O.HoveredStateLayerOpacity,"focused-year-state-layer-color":r.OnSurface,"focused-year-state-layer-opacity":O.FocusedStateLayerOpacity,"pressed-year-state-layer-color":r.OnSurface,"pressed-year-state-layer-opacity":O.PressedStateLayerOpacity,"hovered-menu-item-state-layer-color":r.OnSurface,"hovered-menu-item-state-layer-opacity":O.HoveredStateLayerOpacity,"focused-menu-item-state-layer-color":r.OnSurface,"focused-menu-item-state-layer-opacity":O.FocusedStateLayerOpacity,"pressed-menu-item-state-layer-color":r.OnSurface,"pressed-menu-item-state-layer-opacity":O.PressedStateLayerOpacity,"enabled-menu-item-label-color":r.OnSurface,"menu-item-label-font":C.BodyLarge.Font,"menu-item-label-leading":C.BodyLarge.LineHeight,"menu-item-label-size":C.BodyLarge.FontSize,"menu-item-label-weight":C.BodyLarge.FontWeight,"menu-item-label-tracking":C.BodyLarge.Tracking,"enabled-menu-selected-container-color":r.SurfaceContainerHighest,"enabled-menu-selected-icon-color":r.OnSurface});var ki=H({"container-shape-start-start":c.ExtraSmall,"container-shape-start-end":c.ExtraSmall,"container-shape-end-start":c.ExtraSmall,"container-shape-end-end":c.ExtraSmall,"enabled-container-color":r.SurfaceContainerHigh,"enabled-container-elevation":`0`,"container-min-width":`360px`,"enabled-selected-day-container-color":r.Primary,"enabled-selected-day-label-color":r.OnPrimary,"enabled-day-label-color":r.OnSurface,"day-container-size":`48px`,"day-node-size":`40px`,"day-container-shape":c.Full,"menu-container-padding-block-start":`8px`,"menu-container-padding-block-end":`8px`,"field-container-height":`56px`,"field-container-shape":c.ExtraSmall,"enabled-field-outline-color":r.Outline,"enabled-field-label-color":r.OnSurface,"enabled-field-icon-color":r.OnSurfaceVariant,"field-label-font":C.BodyLarge.Font,"field-label-leading":C.BodyLarge.LineHeight,"field-label-size":C.BodyLarge.FontSize,"field-label-weight":C.BodyLarge.FontWeight,"field-label-tracking":C.BodyLarge.Tracking,"field-icon-size":`24px`,"disabled-field-label-opacity":O.DisabledStateLayerOpacity,"enabled-field-supporting-label-color":r.OnSurfaceVariant,"field-supporting-label-font":C.BodySmall.Font,"field-supporting-label-leading":C.BodySmall.LineHeight,"field-supporting-label-size":C.BodySmall.FontSize,"field-supporting-label-weight":C.BodySmall.FontWeight,"field-supporting-label-tracking":C.BodySmall.Tracking,"enabled-field-trailing-container-color":r.SurfaceContainerHighest});var _i=H({"container-shape-start-start":c.ExtraLarge,"container-shape-start-end":c.ExtraLarge,"container-shape-end-start":c.ExtraLarge,"container-shape-end-end":c.ExtraLarge,"enabled-container-color":r.SurfaceContainerHigh,"enabled-container-elevation":`0`,"enabled-headline-label-color":r.OnSurface,"enabled-supporting-text-label-color":r.OnSurfaceVariant,"enabled-divider-color":r.OutlineVariant,"enabled-input-outline-color":r.Outline,"focused-input-outline-color":r.Primary,"enabled-input-label-color":r.OnSurfaceVariant,"input-label-font":C.BodySmall.Font,"input-label-leading":C.BodySmall.LineHeight,"input-label-size":C.BodySmall.FontSize,"input-label-weight":C.BodySmall.FontWeight,"input-label-tracking":C.BodySmall.Tracking,"enabled-input-text-color":r.OnSurface,"input-text-font":C.BodyLarge.Font,"input-text-leading":C.BodyLarge.LineHeight,"input-text-size":C.BodyLarge.FontSize,"input-text-weight":C.BodyLarge.FontWeight,"input-text-tracking":C.BodyLarge.Tracking});var Oi=H({"container-shape-start-start":c.None,"container-shape-start-end":c.None,"container-shape-end-start":c.None,"container-shape-end-end":c.None,"enabled-container-color":r.SurfaceContainerHigh,"enabled-container-elevation":`0`,"container-min-width":`360px`,"top-bar-container-padding-block-start":`20px`,"top-bar-container-padding-block-end":`4px`});var se=e=>(t,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};var No={attribute:!0,type:String,converter:qe,reflect:!1,hasChanged:ut};var sa=(e=No,t,n)=>{let{kind:i,metadata:a}=n,o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),i===`setter`&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),i===`accessor`){let{name:s}=n;return{set(l){let d=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,d,e)},init(l){return l!==void 0&&this.C(s,void 0,e,l),l}}}if(i===`setter`){let{name:s}=n;return function(l){let d=this[s];t.call(this,l),this.requestUpdate(s,d,e)}}throw Error(`Unsupported decorator location: `+i)};function b(e){return(t,n)=>typeof n==`object`?sa(e,t,n):((i,a,o)=>{let s=a.hasOwnProperty(o);return a.constructor.createProperty(o,i),s?Object.getOwnPropertyDescriptor(a,o):void 0})(e,t,n)}function X(e){return b(q$1(W({},e),{state:!0,attribute:!1}))}var ht=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function J(e,t){return(n,i,a)=>{let o=s=>s.renderRoot?.querySelector(e)??null;if(t){let{get:s,set:l}=typeof i==`object`?n:a??(()=>{let d=Symbol();return{get(){return this[d]},set(f){this[d]=f}}})();return ht(n,i,{get(){let d=s.call(this);return d===void 0&&(d=o(this),(d!==null||this.hasUpdated)&&l.call(this,d)),d}})}return ht(n,i,{get(){return o(this)}})}}function h(e,t,n,i){var a=arguments.length,o=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a<3?s(o):a>3?s(t,n,o):s(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}var Pi=H({color:{enabled:`transparent`,hovered:r.OnSurface,focused:r.OnSurface,pressed:r.OnSurface},opacity:{enabled:`0`,hovered:O.HoveredStateLayerOpacity,focused:O.FocusedStateLayerOpacity,pressed:O.PressedStateLayerOpacity}});var qo=Y(`--mdc-date-picker`)($i);var Uo=Y(`--mdc-date-picker`)(ki);var Ko=Y(`--mdc-date-picker`)(_i);var jo=Y(`--mdc-date-picker`)(Oi);var Ho=q(`--mdc-elevation`)({level:`var(--_enabled-container-elevation)`})();var Ti=e=>q(`--mdc-ripple`)({"hovered-color":`var(--_hovered-${e}-state-layer-color)`,"focused-color":`var(--_focused-${e}-state-layer-color)`,"pressed-color":`var(--_pressed-${e}-state-layer-color)`,"hovered-opacity":`var(--_hovered-${e}-state-layer-opacity)`,"focused-opacity":`var(--_focused-${e}-state-layer-opacity)`,"pressed-opacity":`var(--_pressed-${e}-state-layer-opacity)`})();var Wo=Ti(`day`);var Go=Ti(`year`);var Jo=k`
    @layer mdc.date-picker.component {
        .container > mdc-elevation {
            ${Ho};
            position: absolute;
            inset: 0;
            border-radius: inherit;
            pointer-events: none;
        }

        :host {
            display: contents;
            user-select: none;
        }

        dialog {
            background: transparent;
            border: none;
            border-start-start-radius: var(--_container-shape-start-start);
            border-start-end-radius: var(--_container-shape-start-end);
            border-end-end-radius: var(--_container-shape-end-end);
            border-end-start-radius: var(--_container-shape-end-start);
            margin: auto;
            max-height: min(560px, calc(100% - 48px));
            max-width: min(560px, calc(100% - 48px));
            min-width: var(--_container-min-width);
            outline: none;
            overflow: visible;
            padding: 0;
            width: fit-content;
        }

        dialog[open] {
            display: flex;
            flex-direction: column;
        }

        ::backdrop {
            background: none;
        }

        .scrim {
            background: var(--md-sys-color-scrim, #000);
            display: none;
            inset: 0;
            opacity: 0.32;
            pointer-events: none;
            position: fixed;
            z-index: 1;
        }

        :host([open]) .scrim {
            display: flex;
        }

        .container {
            background: var(--_enabled-container-color);
            border-radius: inherit;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            min-width: var(--_container-min-width);
            padding-block-start: var(--_container-padding-block-start);
            padding-block-end: var(--_container-padding-block-end);
            padding-inline-start: var(--_container-padding-inline-start);
            padding-inline-end: var(--_container-padding-inline-end);
            position: relative;
            user-select: none;
        }

        .header {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            height: var(--_header-container-height);
            justify-content: space-between;
            margin-inline-start: calc(-1 * var(--_container-padding-inline-start));
            margin-inline-end: calc(-1 * var(--_container-padding-inline-end));
            padding-block-start: var(--_header-container-padding-block-start);
            padding-block-end: var(--_header-container-padding-block-end);
            padding-inline-start: var(--_header-container-padding-inline-start);
            padding-inline-end: var(--_header-container-padding-inline-end);
        }

        .supporting-text {
            color: var(--_enabled-supporting-text-label-color);
            font-family: var(--_supporting-text-label-font);
            font-size: var(--_supporting-text-label-size);
            font-weight: var(--_supporting-text-label-weight);
            letter-spacing: var(--_supporting-text-label-tracking);
            line-height: var(--_supporting-text-label-leading);
            margin: 0;
        }

        .headline {
            align-items: center;
            color: var(--_enabled-headline-label-color);
            display: flex;
            font-family: var(--_headline-label-font);
            font-size: var(--_headline-label-size);
            font-weight: var(--_headline-label-weight);
            justify-content: space-between;
            letter-spacing: var(--_headline-label-tracking);
            line-height: var(--_headline-label-leading);
            margin: 0;
            min-height: 40px;
        }

        .nav-row {
            align-items: center;
            box-sizing: border-box;
            display: flex;
            height: var(--_nav-container-height);
            justify-content: space-between;
            margin-inline-start: calc(-1 * var(--_container-padding-inline-start));
            margin-inline-end: calc(-1 * var(--_container-padding-inline-end));
            padding-inline-start: var(--_container-padding-inline-start);
            padding-inline-end: var(--_container-padding-inline-end);
            position: relative;
        }

        .menu-button {
            --mdc-button-enabled-text-label-color: var(--_enabled-menu-item-label-color);
            --mdc-button-hovered-text-label-color: var(--_enabled-menu-item-label-color);
            --mdc-button-focused-text-label-color: var(--_enabled-menu-item-label-color);
            --mdc-button-pressed-text-label-color: var(--_enabled-menu-item-label-color);
            --mdc-button-hovered-text-state-layer-color: var(--_hovered-year-state-layer-color);
            --mdc-button-hovered-text-state-layer-opacity: var(--_hovered-year-state-layer-opacity);
            --mdc-button-focused-text-state-layer-color: var(--_focused-year-state-layer-color);
            --mdc-button-focused-text-state-layer-opacity: var(--_focused-year-state-layer-opacity);
            --mdc-button-pressed-text-state-layer-color: var(--_pressed-year-state-layer-color);
            --mdc-button-pressed-text-state-layer-opacity: var(--_pressed-year-state-layer-opacity);
            height: var(--_nav-container-height);
        }

        .docked-nav {
            flex-wrap: wrap;
            gap: 4px;
            justify-content: space-between;
        }

        .menu-group {
            align-items: center;
            display: flex;
        }

        .menu-group-label {
            align-items: center;
            color: var(--_enabled-weekday-label-color);
            display: inline-flex;
            font-family: var(--_menu-item-label-font);
            font-size: var(--_menu-item-label-size);
            font-weight: var(--_menu-item-label-weight);
            letter-spacing: var(--_menu-item-label-tracking);
            line-height: var(--_menu-item-label-leading);
            min-height: 40px;
            padding-inline: 12px;
        }

        .menu {
            background: var(--_enabled-container-color);
            border: none;
            border-block-start: 1px solid var(--_enabled-divider-color);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            left: 0;
            right: 0;
            max-height: 280px;
            overflow-y: auto;
            padding-block: 8px;
            position: absolute;
            top: 100%;
            z-index: 2;
        }

        .menu-item {
            align-items: center;
            appearance: none;
            background: transparent;
            border: none;
            color: var(--_enabled-menu-item-label-color);
            cursor: pointer;
            display: flex;
            font-family: var(--_menu-item-label-font);
            font-size: var(--_menu-item-label-size);
            font-weight: var(--_menu-item-label-weight);
            gap: 12px;
            letter-spacing: var(--_menu-item-label-tracking);
            line-height: var(--_menu-item-label-leading);
            min-height: 48px;
            padding-inline: 16px;
            position: relative;
            text-align: start;
        }

        .menu-item mdc-ripple {
            position: absolute;
            ${Ti(`menu-item`)};
        }

        .menu-item svg {
            height: 24px;
            width: 24px;
            fill: var(--_enabled-menu-selected-icon-color);
            visibility: hidden;
        }

        .menu-item.selected {
            background: var(--_enabled-menu-selected-container-color);
        }

        .menu-item.selected svg {
            visibility: visible;
        }

        .nav-label {
            color: var(--_enabled-supporting-text-label-color);
            font-family: var(--_weekday-label-font);
            font-size: var(--_weekday-label-size);
            font-weight: var(--_weekday-label-weight);
        }

        .nav-buttons {
            display: flex;
            gap: 4px;
        }

        .weekdays {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            margin-block-start: 0px;
        }

        .weekday {
            align-items: center;
            color: var(--_enabled-weekday-label-color);
            display: flex;
            font-family: var(--_weekday-label-font);
            font-size: var(--_weekday-label-size);
            font-weight: var(--_weekday-label-weight);
            height: var(--_day-container-size);
            justify-content: center;
            letter-spacing: var(--_weekday-label-tracking);
            line-height: var(--_weekday-label-leading);
        }

        .grid {
            border: none;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            margin: 0;
            padding: 0;
        }

        .day {
            align-items: center;
            appearance: none;
            background: transparent;
            border: none;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            height: var(--_day-container-size);
            justify-content: center;
            padding: 0;
            position: relative;
            width: 100%;
        }

        .day mdc-ripple {
            border-radius: var(--_day-container-shape);
            inset-block: calc((var(--_day-container-size) - var(--_day-node-size)) / 2);
            inset-inline: calc(50% - var(--_day-node-size) / 2);
            position: absolute;
            ${Wo};
        }

        .day-inner {
            align-items: center;
            border-radius: var(--_day-container-shape);
            color: var(--_enabled-day-label-color);
            display: flex;
            font-family: var(--_day-label-font);
            font-size: var(--_day-label-size);
            font-weight: var(--_day-label-weight);
            height: var(--_day-node-size);
            justify-content: center;
            letter-spacing: var(--_day-label-tracking);
            line-height: var(--_day-label-leading);
            position: relative;
            width: var(--_day-node-size);
        }

        .day.outside .day-inner {
            color: var(--_enabled-outside-month-day-label-color);
        }

        .day.today .day-inner {
            color: var(--_enabled-today-day-label-color);
            outline: var(--_today-day-container-outline-width) solid var(--_today-day-container-outline-color);
            outline-offset: -1px;
        }

        .day.selected .day-inner {
            background: var(--_enabled-selected-day-container-color);
            color: var(--_enabled-selected-day-label-color);
        }

        .day.in-range .day-inner {
            background: transparent;
            color: var(--_enabled-range-label-color);
        }

        .day.in-range::before,
        .day.range-start::before,
        .day.range-end::before {
            content: '';
            position: absolute;
            top: calc((var(--_day-container-size) - var(--_day-node-size)) / 2);
            bottom: calc((var(--_day-container-size) - var(--_day-node-size)) / 2);
            background: var(--_enabled-range-container-color);
        }

        .day.in-range::before {
            left: 0;
            right: 0;
        }

        .day.range-start::before {
            left: calc(50% - var(--_day-node-size) / 2);
            right: 0;
            border-radius: calc(var(--_day-node-size) / 2) 0 0 calc(var(--_day-node-size) / 2);
        }

        .day.range-end::before {
            left: 0;
            right: calc(50% - var(--_day-node-size) / 2);
            border-radius: 0 calc(var(--_day-node-size) / 2) calc(var(--_day-node-size) / 2) 0;
        }

        .day.range-pending::before {
            content: none;
        }

        .day.col-first.in-range:not(.range-start)::before {
            left: calc(-1 * var(--_container-padding-inline-start));
        }

        .day.col-last.in-range:not(.range-end)::before {
            right: calc(-1 * var(--_container-padding-inline-end));
        }

        /* Endpoint sitting on the container edge: the band full-bleeds to the
           panel edge just like the middle cells. */
        .day.range-end.col-first::before {
            left: calc(-1 * var(--_container-padding-inline-start));
        }

        .day.range-start.col-last::before {
            right: calc(-1 * var(--_container-padding-inline-end));
        }

        .day.range-start .day-inner,
        .day.range-end .day-inner {
            background: var(--_enabled-selected-day-container-color);
            border-radius: var(--_day-container-shape);
            color: var(--_enabled-selected-day-label-color);
        }

        .day:disabled {
            cursor: default;
        }

        .day:disabled .day-inner {
            color: var(--_enabled-disabled-day-label-color);
            opacity: var(--_enabled-disabled-day-label-opacity);
        }

        .day:focus-visible {
            outline: none;
        }

        .day:focus-visible .day-inner {
            outline: 2px solid var(--_enabled-today-day-label-color);
            outline-offset: 1px;
        }

        .years {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 4px;
            max-height: 320px;
            overflow-y: auto;
        }

        .year {
            appearance: none;
            background: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            height: var(--_day-container-size);
            align-items: center;
            justify-content: center;
            padding: 0;
            position: relative;
        }

        .year mdc-ripple {
            border-radius: var(--_year-container-shape);
            inset-block: calc((var(--_day-container-size) - var(--_year-container-height)) / 2);
            inset-inline: calc(50% - var(--_year-container-width) / 2);
            position: absolute;
            ${Go};
        }

        .year-inner {
            align-items: center;
            border-radius: var(--_year-container-shape);
            color: var(--_enabled-year-label-color);
            display: flex;
            font-family: var(--_year-label-font);
            font-size: var(--_year-label-size);
            height: var(--_year-container-height);
            justify-content: center;
            width: var(--_year-container-width);
        }

        .year.today .year-inner {
            color: var(--_enabled-today-year-label-color);
        }

        .year.selected .year-inner {
            background: var(--_enabled-selected-year-container-color);
            color: var(--_enabled-selected-year-label-color);
        }

        .year:focus-visible {
            outline: none;
        }

        .year:focus-visible .year-inner {
            outline: 2px solid var(--_enabled-today-year-label-color);
            outline-offset: 2px;
        }

        .divider {
            background: var(--_enabled-divider-color);
            height: 1px;
            margin-inline-start: calc(-1 * var(--_container-padding-inline-start));
            margin-inline-end: calc(-1 * var(--_container-padding-inline-end));
            margin-block: 0px;
            width: auto;
        }

        .actions {
            align-items: center;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            height: var(--_actions-container-height);
            justify-content: flex-end;
            margin-inline-start: calc(-1 * var(--_container-padding-inline-start));
            margin-inline-end: calc(-1 * var(--_container-padding-inline-end));
            padding-inline-start: var(--_container-padding-inline-start);
            padding-inline-end: var(--_container-padding-inline-end);
        }

        .actions-split {
            justify-content: space-between;
        }

        .actions-end {
            display: flex;
            gap: 8px;
        }

        .input-row {
            display: flex;
            gap: 8px;
        }

        .input-field {
            box-sizing: border-box;
            border: 1px solid var(--_enabled-input-outline-color);
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            height: 56px;
            justify-content: center;
            padding-inline: 16px;
            padding-block-start: 8px;
            position: relative;
            width: 100%;
        }

        .input-field:focus-within {
            border-color: var(--_focused-input-outline-color);
            border-width: 2px;
            padding-inline: 15px;
        }

        .input-label {
            background: var(--_enabled-container-color);
            color: var(--_enabled-input-label-color);
            font-family: var(--_input-label-font);
            font-size: var(--_input-label-size);
            font-weight: var(--_input-label-weight);
            left: 12px;
            letter-spacing: var(--_input-label-tracking);
            line-height: var(--_input-label-leading);
            padding-inline: 4px;
            position: absolute;
            top: -8px;
        }

        .input-field:focus-within .input-label {
            color: var(--_focused-input-outline-color);
        }

        .input-field input {
            appearance: none;
            background: transparent;
            border: none;
            color: var(--_enabled-input-text-color);
            font-family: var(--_input-text-font);
            font-size: var(--_input-text-size);
            font-weight: var(--_input-text-weight);
            letter-spacing: var(--_input-text-tracking);
            line-height: var(--_input-text-leading);
            outline: none;
            padding: 0;
            user-select: text;
            width: 100%;
        }

        .top-bar {
            align-items: center;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            padding-block-start: var(--_top-bar-container-padding-block-start);
            padding-block-end: var(--_top-bar-container-padding-block-end);
        }

        .header-center {
            text-align: center;
        }

        .header-center .headline {
            justify-content: center;
        }

        .months {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            margin-inline-start: calc(-1 * var(--_container-padding-inline-start));
            margin-inline-end: calc(-1 * var(--_container-padding-inline-end));
            overflow-y: auto;
            padding-inline-start: var(--_container-padding-inline-start);
            padding-inline-end: var(--_container-padding-inline-end);
            scrollbar-width: none;
        }

        .stack-month-label {
            color: var(--_enabled-supporting-text-label-color);
            font-family: var(--_weekday-label-font);
            font-size: var(--_weekday-label-size);
            font-weight: var(--_weekday-label-weight);
            letter-spacing: var(--_weekday-label-tracking);
            line-height: var(--_weekday-label-leading);
            margin: 0;
            padding-block: 12px 4px;
            padding-inline-start: 12px;
        }

        dialog.fullscreen {
            max-height: calc(100% - 48px);
            max-width: min(480px, calc(100% - 24px));
            width: min(480px, calc(100% - 24px));
        }

        dialog.fullscreen .header {
            height: auto;
            justify-content: center;
            padding-block-start: 8px;
            padding-block-end: 8px;
        }

        dialog.fullscreen .container {
            max-height: inherit;
        }

        dialog.fullscreen .months {
            max-height: 420px;
        }

        :host([variant='docked']) {
            display: inline-flex;
        }

        .docked-menu {
            position: fixed;
            z-index: 1000;
        }

        .docked-menu[hidden] {
            display: none;
        }

        .docked-wrap {
            display: inline-flex;
            flex-direction: column;
            user-select: none;
        }

        .docked-field {
            align-items: center;
            appearance: none;
            background: transparent;
            border: 1px solid var(--_enabled-field-outline-color);
            border-radius: var(--_field-container-shape);
            box-sizing: border-box;
            color: var(--_enabled-field-label-color);
            cursor: pointer;
            display: flex;
            font-family: var(--_field-label-font);
            font-size: var(--_field-label-size);
            font-weight: var(--_field-label-weight);
            gap: 8px;
            height: var(--_field-container-height);
            justify-content: space-between;
            letter-spacing: var(--_field-label-tracking);
            line-height: var(--_field-label-leading);
            min-width: 240px;
            padding-inline-start: 16px;
            padding-inline-end: 8px;
            position: relative;
            width: 100%;
        }

        .field-notch {
            background: var(--md-sys-color-surface);
            color: var(--_enabled-field-label-color);
            font-family: var(--_field-supporting-label-font);
            font-size: var(--_field-supporting-label-size);
            left: 12px;
            letter-spacing: var(--_field-supporting-label-tracking);
            line-height: var(--_field-supporting-label-leading);
            padding-inline: 4px;
            position: absolute;
            top: -8px;
        }

        .field-value {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .field-trailing {
            align-items: center;
            background: var(--_enabled-field-trailing-container-color);
            border-radius: 8px;
            display: inline-flex;
            justify-content: center;
            padding: 8px;
        }

        .field-supporting {
            color: var(--_enabled-field-supporting-label-color);
            font-family: var(--_field-supporting-label-font);
            font-size: var(--_field-supporting-label-size);
            font-weight: var(--_field-supporting-label-weight);
            letter-spacing: var(--_field-supporting-label-tracking);
            line-height: var(--_field-supporting-label-leading);
            padding-block-start: 4px;
            padding-inline-start: 16px;
        }

        .docked-field:disabled {
            cursor: default;
            opacity: var(--_disabled-field-label-opacity);
        }

        .docked-field:focus-visible {
            outline: 2px solid var(--_enabled-today-day-label-color);
            outline-offset: 2px;
        }

        .docked-field svg {
            color: var(--_enabled-field-icon-color);
            flex-shrink: 0;
            height: var(--_field-icon-size);
            width: var(--_field-icon-size);
            fill: currentColor;
        }

        :host([variant='docked']) .container {
            border-start-start-radius: var(--_container-shape-start-start);
            border-start-end-radius: var(--_container-shape-start-end);
            border-end-end-radius: var(--_container-shape-end-end);
            border-end-start-radius: var(--_container-shape-end-start);
            padding-block-start: var(--_menu-container-padding-block-start);
            padding-block-end: var(--_menu-container-padding-block-end);
        }
    }

    @layer mdc.date-picker.motion {
        @media (prefers-reduced-motion: reduce) {
            :host, :host * {
                animation: none;
                transition: none;
            }
        }
    }

    @layer mdc.date-picker.hcm {
        @media (forced-colors: active) {
            .day-inner, .year-inner {
                forced-color-adjust: none;
            }
            dialog {
                outline: 2px solid WindowText;
            }
            :host([variant='docked']) .container {
                outline: 2px solid WindowText;
            }
            .day.selected .day-inner {
                outline: 2px solid WindowText;
            }
            .day.today .day-inner {
                outline: 2px solid WindowText;
            }
        }
    }

    @layer mdc.date-picker.contrast {
        @media (prefers-contrast: more) {
            dialog {
                outline: 1px solid CanvasText;
            }
        }
        @media (prefers-contrast: less) {
            .divider {
                opacity: 0.7;
            }
        }
    }

    @layer mdc.date-picker.transparency {
        @media (prefers-reduced-transparency: reduce) {
            .scrim {
                opacity: 1;
            }
        }
    }
`;var la=[k`
        @layer mdc.date-picker {
            @layer variable, component, motion, hcm, contrast, transparency;
        }
    `,k`@layer mdc.date-picker.variable {:host {${qo};}}`,k`@layer mdc.date-picker.variable {:host([variant='docked']) {${Uo};}}`,k`@layer mdc.date-picker.variable {:host([variant='fullscreen']) {${jo};}}`,k`@layer mdc.date-picker.variable {:host([display-mode='input']) {${Ko};}}`,Jo];var ca={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};var da=e=>(...t)=>({_$litDirective$:e,values:t});var ua=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var ee=da(class extends ua{constructor(e){if(super(e),e.type!==ca.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((i=>i!==``))));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let n=e.element.classList;for(let i of this.st)i in t||(n.remove(i),this.st.delete(i));for(let i in t){let a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return ge}});function ye(...e){return function(t){return e.reduce((n,i)=>i(n),t)}}var mn=class extends Event{constructor(e,t,n,i){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=i??!1}};var gn=class{constructor(e,t,n,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){let a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new mn(this.context,this.host,this.t,this.subscribe))}};var pa=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};var Zo=class extends Event{constructor(e,t){super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};var ha=class extends pa{constructor(e,t,n){super(t.context!==void 0?t.initialValue:n),this.onContextRequest=i=>{if(i.context!==this.context)return;let a=i.contextTarget??i.composedPath()[0];a!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,a,i.subscribe))},this.onProviderRequest=i=>{if(i.context!==this.context||(i.contextTarget??i.composedPath()[0])===this.host)return;let a=new Set;for(let[o,{consumerHost:s}]of this.subscriptions)a.has(o)||(a.add(o),s.dispatchEvent(new mn(this.context,s,o,!0)));i.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Zo(this.context,this.host))}};var ft=Symbol.for(`mdc-global-context`);(class fa{constructor(){this.provider=null,this.currentConfig={ripple:{},focusRing:{},elevation:{}}}static{this._Instance=null}static get Instance(){return this._Instance||(this._Instance=new fa),this._Instance}mergeConfig(t){return q$1(W(W({},this.currentConfig),t),{ripple:W(W({},this.currentConfig.ripple),t.ripple??{}),focusRing:W(W({},this.currentConfig.focusRing),t.focusRing??{}),elevation:W(W({},this.currentConfig.elevation),t.elevation??{})})}attach(t={}){this.provider||(this.currentConfig=this.mergeConfig(t),this.provider=new ha(document.documentElement,{initialValue:this.currentConfig,context:ft}))}setConfig(t){if(!this.provider)throw new Error(`GlobalMDCContextProvider is not attached yet. Call attach() first.`);this.currentConfig=this.mergeConfig(t),this.provider.setValue(this.currentConfig)}}).Instance;function yn(e){class t extends e{constructor(...i){super(...i),this._ignoreGlobalConfig=!1,this._disableElevation=!1,this._disableElevationConfigured=!1,this._elevationAttributeSyncSource=null,this.globalMDCContextConsumer=new gn(this,{context:ft,subscribe:!0})}get ignoreGlobalConfig(){return this._ignoreGlobalConfig}set ignoreGlobalConfig(i){let a=this._ignoreGlobalConfig;a!==i&&(this._ignoreGlobalConfig=i,this._elevationAttributeSyncSource=`property`,this.toggleAttribute(`ignore-global-config`,i),this._elevationAttributeSyncSource=null,this.requestUpdate(`ignoreGlobalConfig`,a))}get disableElevation(){return this.effectiveDisableElevation}set disableElevation(i){if(this._elevationAttributeSyncSource)return;let a=this._disableElevation,o=this._disableElevationConfigured;this._disableElevation=i,this._disableElevationConfigured=!0,this._elevationAttributeSyncSource=`property`,this.toggleAttribute(`disable-elevation`,i),this._elevationAttributeSyncSource=null,(a!==i||!o)&&this.requestUpdate(`disableElevation`,a)}get useLocalConfig(){return this._ignoreGlobalConfig||this._disableElevationConfigured}get effectiveDisableElevation(){return this.useLocalConfig?this._disableElevation:this.globalElevationConfig.disabled}get globalElevationConfig(){return{disabled:this.globalMDCContextConsumer.value?.elevation?.disabled??!1}}syncDisableElevationAttribute(){let i=this.effectiveDisableElevation;this.hasAttribute(`disable-elevation`)!==i&&(this._elevationAttributeSyncSource=`property`,this.toggleAttribute(`disable-elevation`,i),this._elevationAttributeSyncSource=null)}attributeChangedCallback(i,a,o){if(i===`ignore-global-config`){if(this._elevationAttributeSyncSource)return;let s=this._ignoreGlobalConfig;this._ignoreGlobalConfig=o!==null,this.requestUpdate(`ignoreGlobalConfig`,s);return}if(i===`disable-elevation`){if(this._elevationAttributeSyncSource)return;let s=this._disableElevation;this._disableElevation=o!==null,this._disableElevationConfigured=!0,this.requestUpdate(`disableElevation`,s);return}super.attributeChangedCallback(i,a,o)}renderElevation(){let i=this.disableElevation||(this.disabled??!1);return this.useLocalConfig?S`<mdc-elevation part="elevation" ignore-global-config .disabled="${i}"></mdc-elevation>`:i?S`<mdc-elevation part="elevation" .disabled="${i}"></mdc-elevation>`:S`<mdc-elevation part="elevation"></mdc-elevation>`}updated(i){super.updated(i),this.syncDisableElevationAttribute()}}return h([b({attribute:`ignore-global-config`,type:Boolean,reflect:!0,noAccessor:!0})],t.prototype,`ignoreGlobalConfig`,null),h([b({attribute:`disable-elevation`,type:Boolean,noAccessor:!0})],t.prototype,`disableElevation`,null),t}var He=[`extra-small`,`small`,`medium`,`large`,`extra-large`];var es=e=>He.map(t=>e(t));var ts=e=>{if(e.length!==He.length)throw new Error(`[ButtonSizeDefinition] Expected ${He.length} size entries, got ${e.length}.`);return Object.fromEntries(He.map((t,n)=>[t,e[n]]))};var Mt=(e,t)=>{let n=i=>({[`${e}-${i}`]:es(t)});return W(W(W(W({},n(`start-start`)),n(`start-end`)),n(`end-start`)),n(`end-end`))};var ma={"extra-small":{round:c.Full,square:c.Medium},small:{round:c.Full,square:c.Medium},medium:{round:c.Full,square:c.Large},large:{round:c.Full,square:c.ExtraLarge},"extra-large":{round:c.Full,square:c.ExtraLarge}};var ga={"extra-small":{round:c.Medium,square:c.Full},small:{round:c.Medium,square:c.Full},medium:{round:c.Large,square:c.Full},large:{round:c.ExtraLarge,square:c.Full},"extra-large":{round:c.ExtraLarge,square:c.Full}};var ns={"extra-small":c.Small,small:c.Small,medium:c.Medium,large:c.Large,"extra-large":c.Large};var is=q$1(W(W(W(W(W(W(W({},hi(`label`)([C.LabelLarge,C.LabelLarge,C.TitleMedium,C.HeadlineSmall,C.HeadlineLarge])),pi(`container`)([{block:`0px`,inlineStart:`12px`,inlineEnd:`12px`},{block:`0px`,inlineStart:`16px`,inlineEnd:`16px`},{block:`0px`,inlineStart:`24px`,inlineEnd:`24px`},{block:`0px`,inlineStart:`48px`,inlineEnd:`48px`},{block:`0px`,inlineStart:`64px`,inlineEnd:`64px`}])),Mt(`container-shape-round`,e=>ma[e].round)),Mt(`container-shape-square`,e=>ma[e].square)),Mt(`container-shape-round-selected`,e=>ga[e].round)),Mt(`container-shape-square-selected`,e=>ga[e].square)),Mt(`container-shape-pressed-morph`,e=>ns[e])),{"container-height":[`32px`,`40px`,`56px`,`96px`,`136px`],"outline-width":[`1px`,`1px`,`1px`,`2px`,`3px`],"icon-size":[`20px`,`20px`,`24px`,`32px`,`40px`],"icon-label-space":[`8px`,`8px`,`8px`,`12px`,`16px`]});var Ft=H(Object.fromEntries(Object.entries(is).map(([e,t])=>[e,Array.isArray(t)?ts(t):t])));var bn=[`enabled`,`hovered`,`focused`,`pressed`,`disabled`];var Fe=[`filled`,`filled-tonal`,`elevated`,`outlined`,`text`];var We=(e,t)=>{let n={};for(let i of bn)for(let a of Fe){let o=t(i,a);o!==null&&(n[`${i}-${a}-${e}`]=o)}return n};var rs={enabled:{filled:r.Primary,"filled-tonal":r.SecondaryContainer,elevated:r.SurfaceContainerLow,outlined:`transparent`,text:`transparent`},hovered:{filled:r.Primary,"filled-tonal":r.SecondaryContainer,elevated:r.SurfaceContainerLow,outlined:`transparent`,text:`transparent`},focused:{filled:r.Primary,"filled-tonal":r.SecondaryContainer,elevated:r.SurfaceContainerLow,outlined:`transparent`,text:`transparent`},pressed:{filled:r.Primary,"filled-tonal":r.SecondaryContainer,elevated:r.SurfaceContainerLow,outlined:`transparent`,text:`transparent`},disabled:{filled:r.OnSurface,"filled-tonal":r.OnSurface,elevated:r.OnSurface,outlined:r.OnSurface,text:r.OnSurface}};var as={enabled:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null},hovered:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null},focused:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null},pressed:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null},disabled:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null}};var os={enabled:{filled:`0`,"filled-tonal":`0`,elevated:`1`,outlined:null,text:null},hovered:{filled:null,"filled-tonal":`0`,elevated:`1`,outlined:null,text:null},focused:{filled:`0`,"filled-tonal":`0`,elevated:`1`,outlined:null,text:null},pressed:{filled:`0`,"filled-tonal":`0`,elevated:`1`,outlined:null,text:null},disabled:{filled:`0`,"filled-tonal":`0`,elevated:`0`,outlined:null,text:null}};var ss={enabled:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},hovered:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},focused:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},pressed:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},disabled:{filled:r.OnSurface,"filled-tonal":r.OnSurface,elevated:r.OnSurface,outlined:r.OnSurface,text:r.OnSurface}};var ls={enabled:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},hovered:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},focused:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},pressed:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},disabled:{filled:r.OnSurface,"filled-tonal":r.OnSurface,elevated:r.OnSurface,outlined:r.OnSurface,text:r.OnSurface}};var cs={enabled:{filled:null,"filled-tonal":null,elevated:null,outlined:null,text:null},hovered:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},focused:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},pressed:{filled:r.OnPrimary,"filled-tonal":r.OnSecondaryContainer,elevated:r.Primary,outlined:r.OnSurfaceVariant,text:r.Primary},disabled:{filled:null,"filled-tonal":null,elevated:null,outlined:null,text:null}};var ds={enabled:{filled:null,"filled-tonal":null,elevated:null,outlined:r.OutlineVariant,text:null},hovered:{filled:null,"filled-tonal":null,elevated:null,outlined:r.OutlineVariant,text:null},focused:{filled:null,"filled-tonal":null,elevated:null,outlined:r.OutlineVariant,text:null},pressed:{filled:null,"filled-tonal":null,elevated:null,outlined:r.OutlineVariant,text:null},disabled:{filled:null,"filled-tonal":null,elevated:null,outlined:r.OutlineVariant,text:null}};var Di=H(q$1(W(W(W(W(W(W(W({},We(`container-color`,(e,t)=>rs[e][t])),We(`container-shadow-color`,(e,t)=>as[e][t])),We(`container-elevation`,(e,t)=>os[e][t])),We(`label-color`,(e,t)=>ss[e][t])),We(`icon-color`,(e,t)=>ls[e][t])),We(`state-layer-color`,(e,t)=>cs[e][t])),We(`outline-color`,(e,t)=>ds[e][t])),{"state-layer-opacity":{hovered:O.HoveredStateLayerOpacity,focused:O.FocusedStateLayerOpacity,pressed:O.PressedStateLayerOpacity},"container-opacity":{disabled:`0.1`},"label-opacity":{disabled:`0.38`},"icon-opacity":{disabled:`0.38`}}));var z=Symbol(`internals`);var Li=Symbol(`privateInternals`);function vn(e){class t extends e{get[z](){return this[Li]||(this[Li]=this.attachInternals()),this[Li]}}return t}var Ai=new Set([`ariaAtomic`,`ariaAutoComplete`,`ariaBrailleLabel`,`ariaBrailleRoleDescription`,`ariaBusy`,`ariaChecked`,`ariaColCount`,`ariaColIndex`,`ariaColIndexText`,`ariaColSpan`,`ariaCurrent`,`ariaDescription`,`ariaDisabled`,`ariaExpanded`,`ariaHasPopup`,`ariaHidden`,`ariaInvalid`,`ariaKeyShortcuts`,`ariaLabel`,`ariaLevel`,`ariaLive`,`ariaModal`,`ariaMultiLine`,`ariaMultiSelectable`,`ariaOrientation`,`ariaPlaceholder`,`ariaPosInSet`,`ariaPressed`,`ariaReadOnly`,`ariaRelevant`,`ariaRequired`,`ariaRoleDescription`,`ariaRowCount`,`ariaRowIndex`,`ariaRowIndexText`,`ariaRowSpan`,`ariaSelected`,`ariaSetSize`,`ariaSort`,`ariaValueMax`,`ariaValueMin`,`ariaValueNow`,`ariaValueText`,`role`]);var ps=new Set(Ai.values().map(Mi));function Sn(e){return ps.has(e)}function Mi(e){return e.replace(`aria`,`aria-`).replace(/Elements?/g,``).toLowerCase()}var xn=Symbol(`privateIgnoreAttributeChangesFor`);function wn(e){class t extends e{constructor(...i){super(...i),this[xn]=new Set}attributeChangedCallback(i,a,o){if(!Sn(i)){super.attributeChangedCallback(i,a,o);return}if(this[xn].has(i))return;this[xn].add(i),this.removeAttribute(i),this[xn].delete(i);let s=Ri(i);o===null?delete this.dataset[s]:this.dataset[s]=o,this.requestUpdate(Ri(i),a)}getAttribute(i){return Sn(i)?super.getAttribute(Fi(i)):super.getAttribute(i)}removeAttribute(i){super.removeAttribute(i),Sn(i)&&(super.removeAttribute(Fi(i)),this.requestUpdate())}}return hs(t),t}function hs(e){for(let t of Ai){let n=Mi(t),i=Fi(n),a=Ri(n);e.createProperty(t,{attribute:n,noAccessor:!0}),e.createProperty(Symbol(i),{attribute:i,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[a]??null},set(o){let s=this.dataset[a]??null;o!==s&&(o===null?delete this.dataset[a]:this.dataset[a]=o,this.requestUpdate(t,s))}})}}function Fi(e){return`data-${e}`}function Ri(e){return e.replace(/-\w/,t=>t[1].toUpperCase())}var ya=class{constructor(e,t){this.currentAnimation=null,this.mutationObserver=null,this.rafId=null,this.hasRendered=!1,this.onMutation=()=>{this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{this.rafId=null;let n=this.options.target();!n||!this.hasRendered||this.animate(n)}))},this.host=e,this.options=W({duration:300,easing:`cubic-bezier(0.2, 0, 0.2, 1)`},t),e.addController(this)}hostConnected(){this.hasRendered=!1,this.cancelPendingRaf(),this.cancelAnimation(),this.mutationObserver=new MutationObserver(this.onMutation),this.mutationObserver.observe(this.host,{childList:!0,subtree:!0,characterData:!0,attributes:!1})}hostDisconnected(){this.mutationObserver?.disconnect(),this.mutationObserver=null,this.cancelPendingRaf(),this.cancelAnimation(),this.hasRendered=!1}hostUpdated(){let e=this.options.target();if(e){if(!this.hasRendered){this.hasRendered=!0;return}this.rafId===null&&this.animate(e)}}animate(e){let{duration:t,easing:n}=this.options;this.cancelAnimation();let i=e.animate([{opacity:`0`,offset:0},{opacity:`0`,offset:.15},{opacity:`1`,offset:1}],{duration:t,easing:n,fill:`none`});this.currentAnimation=i,i.finished.then(()=>{this.currentAnimation===i&&(this.currentAnimation=null)}).catch(()=>{})}cancelAnimation(){this.currentAnimation&&(this.currentAnimation.cancel(),this.currentAnimation=null)}cancelPendingRaf(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}};var ba=class{constructor(e,t){this.naturalSize=null,this.currentAnimation=null,this.mutationObserver=null,this.rafId=null,this.onMutation=()=>{this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{this.rafId=null;let n=this.options.target();!n||this.naturalSize===null||this.measure(n)}))},this.host=e,this.options=W({dimension:`width`,duration:300,easing:`cubic-bezier(0.2, 0, 0.2, 1)`},t),e.addController(this)}hostConnected(){this.naturalSize=null,this.cancelPendingRaf(),this.cancelAnimation(),this.mutationObserver=new MutationObserver(this.onMutation),this.mutationObserver.observe(this.host,{childList:!0,subtree:!0,characterData:!0,attributes:!1})}hostDisconnected(){this.mutationObserver?.disconnect(),this.mutationObserver=null,this.cancelPendingRaf(),this.cancelAnimation(),this.naturalSize=null}hostUpdated(){let e=this.options.target();if(e){if(this.naturalSize===null){this.naturalSize=this.readNaturalSize(e);return}this.rafId===null&&this.measure(e)}}measure(e){let t;if(this.currentAnimation){let i=e.getBoundingClientRect();t=this.options.dimension===`width`?i.width:i.height,this.cancelAnimation()}else t=this.naturalSize;let n=this.readNaturalSize(e);this.naturalSize=n,!(Math.abs(t-n)<1)&&this.animate(e,t,n)}animate(e,t,n){let{dimension:i,duration:a,easing:o}=this.options,s={[i]:`${t}px`,offset:0},l={[i]:`${t}px`,offset:.15},d={[i]:`${n}px`,offset:1},f=e.animate([s,l,d],{duration:a,easing:o,fill:`none`});this.currentAnimation=f,f.finished.then(()=>{this.currentAnimation===f&&(this.currentAnimation=null)}).catch(()=>{})}readNaturalSize(e){return this.options.dimension===`width`?e.scrollWidth:e.scrollHeight}cancelAnimation(){this.currentAnimation&&(this.currentAnimation.cancel(),this.currentAnimation=null)}cancelPendingRaf(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}};function Cn(e){let t=new MouseEvent(`click`,{bubbles:!0});return e.dispatchEvent(t),t}function En(e){return e.currentTarget!==e.target||e.composedPath()[0]!==e.target||e.target.disabled?!1:!fs(e)}function fs(e){let t=zi;return t&&(e.preventDefault(),e.stopImmediatePropagation()),ms(),t}var zi=!1;async function ms(){zi=!0,await null,zi=!1}function $n(e){class t extends e{constructor(...i){super(...i),this._ignoreGlobalConfig=!1,this._focusRingDisabled=!1,this._focusRingDisabledConfigured=!1,this._focusRingAttributeSyncSource=null,this.focusRingShapeInherit=!0,this.focusRingInward=!1,this.focusRingAnimationDisabled=!1,this.focusRingFocused=!1,this.focusRingPersistent=!1}get ignoreGlobalConfig(){return this._ignoreGlobalConfig}set ignoreGlobalConfig(i){let a=this._ignoreGlobalConfig;a!==i&&(this._ignoreGlobalConfig=i,this._focusRingAttributeSyncSource=`property`,this.toggleAttribute(`ignore-global-config`,i),this._focusRingAttributeSyncSource=null,this.requestUpdate(`ignoreGlobalConfig`,a))}get focusRingDisabled(){return this._focusRingDisabled}set focusRingDisabled(i){if(this._focusRingAttributeSyncSource)return;let a=this._focusRingDisabled,o=this._focusRingDisabledConfigured;this._focusRingDisabled=i,this._focusRingDisabledConfigured=!0,this._focusRingAttributeSyncSource=`property`,this.toggleAttribute(`focus-ring-disabled`,i),this._focusRingAttributeSyncSource=null,(a!==i||!o)&&this.requestUpdate(`focusRingDisabled`,a)}get focusRingHtmlFor(){return this.focusRingElement?.htmlFor??null}get focusRingControl(){return this.focusRingElement?.control??null}get useLocalConfig(){return this._ignoreGlobalConfig||this._focusRingDisabledConfigured}attributeChangedCallback(i,a,o){if(i===`ignore-global-config`){if(this._focusRingAttributeSyncSource)return;let s=this._ignoreGlobalConfig;this._ignoreGlobalConfig=o!==null,this.requestUpdate(`ignoreGlobalConfig`,s);return}if(i===`focus-ring-disabled`){if(this._focusRingAttributeSyncSource)return;let s=this._focusRingDisabled;this._focusRingDisabled=o!==null,this._focusRingDisabledConfigured=!0,this.requestUpdate(`focusRingDisabled`,s);return}super.attributeChangedCallback(i,a,o)}updated(i){super.updated(i),this.focusRingElement&&(this.focusRingElement.control!==this.focusRingControl&&(this.focusRingElement.control=this.focusRingControl),this.focusRingElement.htmlFor!==this.focusRingHtmlFor&&(this.focusRingElement.htmlFor=this.focusRingHtmlFor),this.useLocalConfig&&this.focusRingElement.disabled!==this.focusRingDisabled&&(this.focusRingElement.disabled=this.focusRingDisabled),this.focusRingElement.animationDisabled!==this.focusRingAnimationDisabled&&(this.focusRingElement.animationDisabled=this.focusRingAnimationDisabled),this.focusRingElement.persistent!==this.focusRingPersistent&&(this.focusRingElement.persistent=this.focusRingPersistent),this.focusRingFocused&&!this.focusRingElement.focused&&(this.focusRingElement.focused=!0))}renderFocusRing(){return this.useLocalConfig?S`<mdc-focus-ring part="focus-ring" id="focus-ring-part" ignore-global-config .disabled="${this.focusRingDisabled}" ?inward="${this.focusRingInward}" .shapeInherit="${this.focusRingShapeInherit}" .animationDisabled="${this.focusRingAnimationDisabled}" .persistent="${this.focusRingPersistent}"></mdc-focus-ring>`:S`<mdc-focus-ring part="focus-ring" id="focus-ring-part" ?inward="${this.focusRingInward}" .shapeInherit="${this.focusRingShapeInherit}" .animationDisabled="${this.focusRingAnimationDisabled}" .persistent="${this.focusRingPersistent}"></mdc-focus-ring>`}}return h([b({type:Boolean,reflect:!0,attribute:`ignore-global-config`,noAccessor:!0})],t.prototype,`ignoreGlobalConfig`,null),h([b({type:Boolean,reflect:!0,attribute:`focus-ring-shape-inherit`})],t.prototype,`focusRingShapeInherit`,void 0),h([b({type:Boolean,reflect:!0,attribute:`focus-ring-inward`})],t.prototype,`focusRingInward`,void 0),h([b({type:Boolean,attribute:`focus-ring-disabled`,noAccessor:!0})],t.prototype,`focusRingDisabled`,null),h([b({type:Boolean,reflect:!0,attribute:`focus-ring-animation-disabled`})],t.prototype,`focusRingAnimationDisabled`,void 0),h([b({type:Boolean,reflect:!0,attribute:`focus-ring-focused`})],t.prototype,`focusRingFocused`,void 0),h([b({type:Boolean,reflect:!0,attribute:`focus-ring-persistent`})],t.prototype,`focusRingPersistent`,void 0),h([J(`#focus-ring-part`)],t.prototype,`focusRingElement`,void 0),t}function kn(e){class t extends e{constructor(...i){super(...i),this._ignoreGlobalConfig=!1,this._disableRipple=!1,this._disableRippleHoverStateLayer=!1,this._disableRippleFocusStateLayer=!1,this._disableRipplePressStateLayer=!1,this._rippleConfigConfigured=!1,this._rippleAttributeSyncSource=null}get ignoreGlobalConfig(){return this._ignoreGlobalConfig}set ignoreGlobalConfig(i){let a=this._ignoreGlobalConfig;a!==i&&(this._ignoreGlobalConfig=i,this._rippleAttributeSyncSource=`property`,this.toggleAttribute(`ignore-global-config`,i),this._rippleAttributeSyncSource&&(this._rippleAttributeSyncSource=null),this.requestUpdate(`ignoreGlobalConfig`,a))}get disableRipple(){return this._disableRipple}set disableRipple(i){if(this._rippleAttributeSyncSource)return;let a=this._disableRipple;this._disableRipple=i,this._rippleConfigConfigured=!0,this._rippleAttributeSyncSource=`property`,this.toggleAttribute(`disable-ripple`,i),this._rippleAttributeSyncSource=null,this.requestUpdate(`disableRipple`,a)}get disableRippleHoverStateLayer(){return this._disableRippleHoverStateLayer}set disableRippleHoverStateLayer(i){if(this._rippleAttributeSyncSource)return;let a=this._disableRippleHoverStateLayer;this._disableRippleHoverStateLayer=i,this._rippleConfigConfigured=!0,this._rippleAttributeSyncSource=`property`,this.toggleAttribute(`disable-ripple-hover-state-layer`,i),this._rippleAttributeSyncSource=null,this.requestUpdate(`disableRippleHoverStateLayer`,a)}get disableRippleFocusStateLayer(){return this._disableRippleFocusStateLayer}set disableRippleFocusStateLayer(i){if(this._rippleAttributeSyncSource)return;let a=this._disableRippleFocusStateLayer;this._disableRippleFocusStateLayer=i,this._rippleConfigConfigured=!0,this._rippleAttributeSyncSource=`property`,this.toggleAttribute(`disable-ripple-focus-state-layer`,i),this._rippleAttributeSyncSource=null,this.requestUpdate(`disableRippleFocusStateLayer`,a)}get disableRipplePressStateLayer(){return this._disableRipplePressStateLayer}set disableRipplePressStateLayer(i){if(this._rippleAttributeSyncSource)return;let a=this._disableRipplePressStateLayer;this._disableRipplePressStateLayer=i,this._rippleConfigConfigured=!0,this._rippleAttributeSyncSource=`property`,this.toggleAttribute(`disable-ripple-press-state-layer`,i),this._rippleAttributeSyncSource=null,this.requestUpdate(`disableRipplePressStateLayer`,a)}get useLocalConfig(){return this._ignoreGlobalConfig||this._rippleConfigConfigured}get rippleHtmlFor(){return this.rippleElement?.htmlFor??null}get rippleControl(){return this.rippleElement?.control??null}updated(i){super.updated(i),this.rippleElement&&(this.rippleElement.control!==this.rippleControl&&(this.rippleElement.control=this.rippleControl),this.rippleElement.htmlFor!==this.rippleHtmlFor&&(this.rippleElement.htmlFor=this.rippleHtmlFor))}renderRipple(){return this.useLocalConfig?S`<mdc-ripple part="ripple" id="ripple-part" ignore-global-config .disabled="${this.disableRipple}" .disableHoverStateLayer="${this.disableRippleHoverStateLayer}" .disableFocusStateLayer="${this.disableRippleFocusStateLayer}" .disablePressStateLayer="${this.disableRipplePressStateLayer}"></mdc-ripple>`:S`<mdc-ripple part="ripple" id="ripple-part"></mdc-ripple>`}}return h([b({type:Boolean,reflect:!0,attribute:`ignore-global-config`,noAccessor:!0})],t.prototype,`ignoreGlobalConfig`,null),h([b({type:Boolean,reflect:!0,attribute:`disable-ripple`,noAccessor:!0})],t.prototype,`disableRipple`,null),h([b({type:Boolean,reflect:!0,attribute:`disable-ripple-hover-state-layer`,noAccessor:!0})],t.prototype,`disableRippleHoverStateLayer`,null),h([b({type:Boolean,reflect:!0,attribute:`disable-ripple-focus-state-layer`,noAccessor:!0})],t.prototype,`disableRippleFocusStateLayer`,null),h([b({type:Boolean,reflect:!0,attribute:`disable-ripple-press-state-layer`,noAccessor:!0})],t.prototype,`disableRipplePressStateLayer`,null),h([J(`#ripple-part`)],t.prototype,`rippleElement`,void 0),t}var le=class extends ye(wn,vn,kn,yn,$n)(oe){get focusRingControl(){return this.buttonElement}get rippleControl(){return this.buttonElement}constructor(){super(),this.size=`small`,this.trailingIcon=!1,this.shape=`round`,this.disableMorph=!1,this.hasIcon=!1,this.hasLabel=!1,this.sizeController=new ba(this,{target:()=>this.labelElement}),this.opacityController=new ya(this,{target:()=>this.labelElement}),this.addEventListener(`click`,this.handleClick.bind(this))}getRenderClasses(){return{container:!0,[this.variant]:!0,[this.shape]:!0,[this.size]:!0,"has-icon":this.hasIcon,"has-label":this.hasLabel,"disable-morph":this.disableMorph,disabled:this.disabled}}render(){let{ariaHasPopup:e,ariaExpanded:t,ariaLabel:n}=this;return S`<button class="${ee(this.getRenderClasses())}" ?disabled="${this.disabled}" aria-disabled="${this.disabled}" aria-label="${n||_}" aria-haspopup="${e||_}" aria-expanded="${t||_}">${this.variant===`outlined`?this.renderOutline():_} ${[`elevated`,`filled`,`filled-tonal`].includes(this.variant)?this.renderElevation():_} ${this.renderContent()} ${this.renderTouchTarget()} ${this.renderBackground()} ${this.renderRipple()} ${this.renderFocusRing()}</button>`}renderBackground(){return S`<span class="background" aria-hidden="true"></span>`}renderOutline(){return S`<span class="outline" aria-hidden="true"></span>`}renderContent(){return S`${this.trailingIcon?_:this.renderIcon()} ${this.renderLabel()} ${this.trailingIcon?this.renderIcon():_}`}renderIcon(){return S`<span class="icon" aria-hidden="true"><slot name="icon" @slotchange="${this.handleIconSlotChange}"></slot></span>`}renderLabel(){return S`<span class="label"><slot @slotchange="${this.handleLabelSlotChange}"></slot></span>`}renderTouchTarget(){return S`<span class="touch-target" aria-hidden="true"></span>`}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}handleClick(e){if(this.disabled){e.stopImmediatePropagation(),e.preventDefault();return}!En(e)||!this.buttonElement||(this.focus(),Cn(this.buttonElement))}handleIconSlotChange(e){this.hasIcon=e.target.assignedElements().length>0}handleLabelSlotChange(e){this.hasLabel=e.target.assignedElements().length>0}};h([b({type:String,reflect:!1})],le.prototype,`size`,void 0);h([b({type:Boolean,attribute:`trailing-icon`})],le.prototype,`trailingIcon`,void 0);h([b({type:String})],le.prototype,`shape`,void 0);h([b({type:Boolean,attribute:`disable-morph`})],le.prototype,`disableMorph`,void 0);h([X()],le.prototype,`hasIcon`,void 0);h([X()],le.prototype,`hasLabel`,void 0);h([J(`.container`)],le.prototype,`buttonElement`,void 0);h([J(`.label`)],le.prototype,`labelElement`,void 0);H(W({"active-width":`8px`,color:r.Secondary,"color-reduced-contrast":r.Outline,duration:ri.Long4,"inward-offset":`0px`,"outward-offset":`2px`,width:`3px`},ci(`shape`)(c.Full)));var gs=Y(`--mdc-button`)(Di);var ys=Y(`--mdc-button`)(Ft);var zt=(e,t)=>q(`--mdc-elevation`)({level:`var(${e})`,"shadow-color":`var(${t})`})();var ue=(e,t)=>M(`
    border-start-start-radius: min(var(--_${e}-${t}-start-start), calc(var(--_${e}-container-height) / 2));
    border-start-end-radius: min(var(--_${e}-${t}-start-end), calc(var(--_${e}-container-height) / 2));
    border-end-start-radius: min(var(--_${e}-${t}-end-start), calc(var(--_${e}-container-height) / 2));
    border-end-end-radius: min(var(--_${e}-${t}-end-end), calc(var(--_${e}-container-height) / 2));
`);var Vi=e=>k`
    &.extra-small { ${ue(`extra-small`,e)}; }
    &.small { ${ue(`small`,e)}; }
    &.medium { ${ue(`medium`,e)}; }
    &.large { ${ue(`large`,e)}; }
    &.extra-large { ${ue(`extra-large`,e)}; }
`;var bs=()=>k`
    .container.round {${Vi(`container-shape-round`)};}
    .container.square {${Vi(`container-shape-square`)};}
    .container:not(.disable-morph):is(.round, .square):active {${Vi(`container-shape-pressed-morph`)};}
`;var pe=(e,t)=>q(`--mdc-focus-ring`)({"shape-start-start":`min(var(--_${e}-${t}-start-start), calc(var(--_${e}-container-height) / 2))`,"shape-start-end":`min(var(--_${e}-${t}-start-end), calc(var(--_${e}-container-height) / 2))`,"shape-end-end":`min(var(--_${e}-${t}-end-end), calc(var(--_${e}-container-height) / 2))`,"shape-end-start":`min(var(--_${e}-${t}-end-start), calc(var(--_${e}-container-height) / 2))`})();var Ii=e=>k`
    &.extra-small mdc-focus-ring {${pe(`extra-small`,e)};}
    &.small mdc-focus-ring {${pe(`small`,e)};}
    &.medium mdc-focus-ring {${pe(`medium`,e)};}
    &.large mdc-focus-ring {${pe(`large`,e)};}
    &.extra-large mdc-focus-ring {${pe(`extra-large`,e)};}
`;var vs=()=>k`
    .container.round {${Ii(`container-shape-round`)};}
    .container.square {${Ii(`container-shape-square`)};}
    .container:not(.disable-morph):is(.round, .square):active {${Ii(`container-shape-pressed-morph`)};}
`;var Bi=()=>k`
    .container.extra-small :is(::slotted([slot="icon"]), .icon) {${q(`--mdc-icon`)({size:`var(--_extra-small-icon-size)`})()};}
    .container.small :is(::slotted([slot="icon"]), .icon) {${q(`--mdc-icon`)({size:`var(--_small-icon-size)`})()};}
    .container.medium :is(::slotted([slot="icon"]), .icon) {${q(`--mdc-icon`)({size:`var(--_medium-icon-size)`})()};}
    .container.large :is(::slotted([slot="icon"]), .icon) {${q(`--mdc-icon`)({size:`var(--_large-icon-size)`})()};}
    .container.extra-large :is(::slotted([slot="icon"]), .icon) {${q(`--mdc-icon`)({size:`var(--_extra-large-icon-size)`})()};}
`;var Rt=e=>q(`--mdc-ripple`)({"hovered-color":`var(--_hovered-${e}-state-layer-color)`,"focused-color":`var(--_focused-${e}-state-layer-color)`,"pressed-color":`var(--_pressed-${e}-state-layer-color)`,"hovered-opacity":`var(--_hovered-state-layer-opacity)`,"focused-opacity":`var(--_focused-state-layer-opacity)`,"pressed-opacity":`var(--_pressed-state-layer-opacity)`})();var Ni=k`
    :host {
        display: inline-flex;
        outline: none;
        vertical-align: top;
        cursor: pointer;
        contain: layout;
        -webkit-tap-highlight-color: transparent;
    }

    .container {
        all: unset;
        position: absolute;
        inset: 0;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        outline: none;
        place-content: center;
        place-items: center;
        position: relative;
        z-index: 0;
        text-overflow: ellipsis;
        text-wrap: nowrap;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        vertical-align: top;
        transition-property: border-radius;
        transition-duration: 350ms;
        transition-timing-function: cubic-bezier(0.42, 1.67, 0.21, 0.9);
    }

    :host([disabled]),
    .container.disabled {
        cursor: default;
        pointer-events: none;
    }

    .container:not(.has-label) .label {
        display: none;
    }

    .label {
        width: auto;
        display: inline-flex;
        box-sizing: border-box;
        will-change: width, opacity;
        overflow: hidden;
    }

    .container .background {
        border-radius: inherit;
        inset: 0;
        position: absolute;
        z-index: -1;
    }

    .container :is(::slotted([slot="icon"]), .icon) {
        display: inline-flex;
        position: relative;
        writing-mode: horizontal-tb;
        fill: currentColor;
        flex-shrink: 0;
    }

    .container:not(.has-icon) .icon {
        display: none;
    }

    .outline {
        inset: 0;
        border-style: solid;
        position: absolute;
        box-sizing: border-box;
        border-start-start-radius: inherit;
        border-start-end-radius: inherit;
        border-end-start-radius: inherit;
        border-end-end-radius: inherit;
        z-index: -1;
    }

    :is(.container .label, .label *) {
        text-overflow: inherit;
    }

    .touch-target {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    [touch-target='wrapper'] {
        margin: max(0px, (48px - var(--_container-height)) / 2) 0;
    }

    [touch-target='none'] .touch-target {
        display: none;
    }
`;var Ss=[`filled`,`filled-tonal`,`elevated`];var xs=Fe.map(e=>`
    .container.${e} .background {
        background-color: var(--_enabled-${e}-container-color);
    }
    .container.${e} .label {
        color: var(--_enabled-${e}-label-color);
    }
    .container.${e} :is(::slotted([slot="icon"]), .icon) {
        color: var(--_enabled-${e}-icon-color);
    }
    .container.disabled.${e} .background {
        background-color: var(--_disabled-${e}-container-color);
        opacity: var(--_disabled-container-opacity);
    }
    .container.disabled.${e} .label {
        color: var(--_disabled-${e}-label-color);
        opacity: var(--_disabled-label-opacity);
    }
    .container.disabled.${e} :is(::slotted([slot="icon"]), .icon) {
        color: var(--_disabled-${e}-icon-color);
        opacity: var(--_disabled-icon-opacity);
    }
`).join(`

`);var ws=Ss.map(e=>`
    .container.${e} mdc-elevation {
        transition-duration: 0ms;
        ${zt(`--_enabled-${e}-container-elevation`,`--_enabled-${e}-container-shadow-color`).cssText};
    }
`).join(`

`);var Cs=k`
    ${M(xs)}

    .container.outlined .outline {
        border-color: var(--_enabled-outlined-outline-color);
    }

    ${M(ws)}
    .container.disabled.elevated mdc-elevation {
        ${zt(`--_disabled-elevated-container-elevation`,`--_disabled-elevated-container-shadow-color`)};
    }

    .container.filled mdc-ripple {${Rt(`filled`)};}
    .container.filled-tonal mdc-ripple {${Rt(`filled-tonal`)};}
    .container.elevated mdc-ripple {${Rt(`elevated`)};}
    .container.outlined mdc-ripple {${Rt(`outlined`)};}
    .container.text mdc-ripple {${Rt(`text`)};}
`;var qi=k`
    ${M(He.map(e=>`
    .container.${e} {
        height: var(--_${e}-container-height);
        min-width: calc(64px - var(--_${e}-container-padding-inline-start) - var(--_${e}-container-padding-inline-end));
        padding-block-start: var(--_${e}-container-padding-block-start);
        padding-block-end: var(--_${e}-container-padding-block-end);
        padding-inline-start: var(--_${e}-container-padding-inline-start);
        padding-inline-end: var(--_${e}-container-padding-inline-end);
        gap: var(--_${e}-icon-label-space);
    }

    .container.${e} .label {
        font-family: var(--_${e}-label-font);
        font-size: var(--_${e}-label-size);
        line-height: var(--_${e}-label-leading);
        font-weight: var(--_${e}-label-weight);
        letter-spacing: var(--_${e}-label-tracking);
    }

    .container.${e} :is(::slotted([slot="icon"]), .icon) {
        font-size: var(--_${e}-icon-size);
        inline-size: var(--_${e}-icon-size);
        block-size: var(--_${e}-icon-size);
    }

    .container.${e} .outline {
        border-width: var(--_${e}-outline-width);
    }
`).join(`

`))}
`;var $s=k`
    @media (forced-colors: active) {
        .background {
            border: 1px solid CanvasText;
        }

        :host([disabled]) {
            --_disabled-filled-icon-color: GrayText;
            --_disabled-filled-tonal-icon-color: GrayText;
            --_disabled-elevated-icon-color: GrayText;
            --_disabled-outlined-icon-color: GrayText;
            --_disabled-text-icon-color: GrayText;
            --_disabled-icon-opacity: 1;
            --_disabled-container-opacity: 1;
            --_disabled-filled-label-color: GrayText;
            --_disabled-filled-tonal-label-color: GrayText;
            --_disabled-elevated-label-color: GrayText;
            --_disabled-outlined-label-color: GrayText;
            --_disabled-text-label-color: GrayText;
            --_disabled-label-opacity: 1;
            --_disabled-filled-container-color: Canvas;
            --_disabled-filled-tonal-container-color: Canvas;
            --_disabled-elevated-container-color: Canvas;
            --_disabled-outlined-container-color: Canvas;
            --_disabled-text-container-color: Canvas;
            --_disabled-outlined-outline-color: GrayText;
        }

        :host([disabled]) .container.outlined .outline {
            border-color: GrayText;
        }

        .container.outlined .outline {
            border-color: ButtonText;
        }

        .container.text {
            border: 1px solid transparent;
        }

        mdc-ripple {
            display: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .container,
        .container * {
            transition: none;
        }
    }

    @media (prefers-contrast: more) {
        .container .outline {
            border-color: CanvasText;
        }
        .container .label {
            color: CanvasText;
        }
        .container :is(::slotted([slot="icon"]), .icon) {
            color: CanvasText;
        }
    }

    @media (prefers-contrast: less) {
        .container .outline {
            border-color: GrayText;
        }
    }
`;var va=[k`:host {${gs}${ys};}`,bs(),vs(),Bi(),Ni,Cs,qi,$s];function _n(e){e.addInitializer(t=>{let n=t;n.addEventListener(`click`,async i=>{let{type:a,[z]:o}=n,{form:s}=o;if(!(!s||a===`button`)&&(await new Promise(l=>{setTimeout(l)}),!i.defaultPrevented)){if(a===`reset`){s.reset();return}s.addEventListener(`submit`,l=>{Object.defineProperty(l,"submitter",{configurable:!0,enumerable:!0,get:()=>n})},{capture:!0,once:!0}),o.setFormValue(n.value),s.requestSubmit()}})})}var Ui;var Ge=class extends le{static{Ui=this}constructor(...t){super(...t),this.variant=`filled`,this.type=`submit`,this.value=``,this.disabled=!1}static{this.styles=va}static{this.formAssociated=!0}static{_n(Ui)}get name(){return this.getAttribute(`name`)??``}set name(t){this.setAttribute(`name`,t)}get form(){return this[z].form}};h([b({type:String,reflect:!1})],Ge.prototype,`variant`,void 0);h([b({type:String})],Ge.prototype,`type`,void 0);h([b({type:String,reflect:!0})],Ge.prototype,`value`,void 0);h([b({type:Boolean,reflect:!0})],Ge.prototype,`disabled`,void 0);Ge=Ui=h([se(`mdc-button`)],Ge);var On=[`unselected`,`selected`];var Ki=(e,t)=>{let n={};for(let i of bn)for(let a of Fe)for(let o of On){let s=t(i,a,o);s!==null&&(n[`${i}-${a}-${o}-${e}`]=s)}return n};var Vt=(e,t)=>Ki(e,(n,i,a)=>t[n][i][a===`selected`?1:0]);var ks={enabled:{filled:[r.SurfaceContainer,r.Primary],"filled-tonal":[r.SecondaryContainer,r.Secondary],elevated:[r.SurfaceContainerLow,r.Primary],outlined:[`transparent`,r.InverseSurface],text:[`transparent`,`transparent`]},hovered:{filled:[r.SurfaceContainer,r.Primary],"filled-tonal":[r.SecondaryContainer,r.Secondary],elevated:[r.SurfaceContainerLow,r.Primary],outlined:[`transparent`,r.InverseSurface],text:[`transparent`,`transparent`]},focused:{filled:[r.SurfaceContainer,r.Primary],"filled-tonal":[r.SecondaryContainer,r.Secondary],elevated:[r.SurfaceContainerLow,r.Primary],outlined:[`transparent`,r.InverseSurface],text:[`transparent`,`transparent`]},pressed:{filled:[r.SurfaceContainer,r.Primary],"filled-tonal":[r.SecondaryContainer,r.Secondary],elevated:[r.SurfaceContainerLow,r.Primary],outlined:[`transparent`,r.InverseSurface],text:[`transparent`,`transparent`]},disabled:{filled:[r.OnSurface,r.OnSurface],"filled-tonal":[r.OnSurface,r.OnSurface],elevated:[r.OnSurface,r.OnSurface],outlined:[r.OnSurface,r.OnSurface],text:[r.OnSurface,r.OnSurface]}};var _s={enabled:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},hovered:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},focused:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},pressed:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},disabled:{filled:[r.OnSurface,r.OnSurface],"filled-tonal":[r.OnSurface,r.OnSurface],elevated:[r.OnSurface,r.OnSurface],outlined:[r.OnSurface,r.OnSurface],text:[r.OnSurface,r.OnSurface]}};var Os={enabled:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},hovered:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},focused:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},pressed:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},disabled:{filled:[r.OnSurface,r.OnSurface],"filled-tonal":[r.OnSurface,r.OnSurface],elevated:[r.OnSurface,r.OnSurface],outlined:[r.OnSurface,r.OnSurface],text:[r.OnSurface,r.OnSurface]}};var Ps={enabled:{filled:[null,null],"filled-tonal":[null,null],elevated:[null,null],outlined:[null,null],text:[null,null]},hovered:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},focused:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},pressed:{filled:[r.OnSurfaceVariant,r.OnPrimary],"filled-tonal":[r.OnSecondaryContainer,r.OnSecondary],elevated:[r.Primary,r.OnPrimary],outlined:[r.OnSurfaceVariant,r.InverseOnSurface],text:[r.Primary,r.Primary]},disabled:{filled:[null,null],"filled-tonal":[null,null],elevated:[null,null],outlined:[null,null],text:[null,null]}};var Ts={enabled:{filled:[null,null],"filled-tonal":[null,null],elevated:[null,null],outlined:[r.OutlineVariant,`transparent`],text:[null,null]},hovered:{filled:[null,null],"filled-tonal":[null,null],elevated:[null,null],outlined:[r.OutlineVariant,`transparent`],text:[null,null]},focused:{filled:[null,null],"filled-tonal":[null,null],elevated:[null,null],outlined:[r.OutlineVariant,`transparent`],text:[null,null]},pressed:{filled:[null,null],"filled-tonal":[null,null],elevated:[null,null],outlined:[r.OutlineVariant,`transparent`],text:[null,null]},disabled:{filled:[null,null],"filled-tonal":[null,null],elevated:[null,null],outlined:[r.OutlineVariant,`transparent`],text:[null,null]}};var Ds={enabled:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null},hovered:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null},focused:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null},pressed:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null},disabled:{filled:r.Shadow,"filled-tonal":r.Shadow,elevated:r.Shadow,outlined:null,text:null}};var Ls={enabled:{filled:`0`,"filled-tonal":`0`,elevated:`1`,outlined:null,text:null},hovered:{filled:null,"filled-tonal":`0`,elevated:`1`,outlined:null,text:null},focused:{filled:`0`,"filled-tonal":`0`,elevated:`1`,outlined:null,text:null},pressed:{filled:`0`,"filled-tonal":`0`,elevated:`1`,outlined:null,text:null},disabled:{filled:`0`,"filled-tonal":`0`,elevated:`0`,outlined:null,text:null}};var ji=H(q$1(W(W(W(W(W(W(W({},Vt(`container-color`,ks)),Vt(`label-color`,_s)),Vt(`icon-color`,Os)),Vt(`state-layer-color`,Ps)),Vt(`outline-color`,Ts)),Ki(`container-shadow-color`,(e,t)=>Ds[e][t])),Ki(`container-elevation`,(e,t)=>Ls[e][t])),{"state-layer-opacity":{hovered:O.HoveredStateLayerOpacity,focused:O.FocusedStateLayerOpacity,pressed:O.PressedStateLayerOpacity},"container-opacity":{disabled:`0.1`},"label-opacity":{disabled:`0.38`},"icon-opacity":{disabled:`0.38`}}));var Ye=Symbol(`getFormValue`);var mt=Symbol(`getFormState`);function Pn(e){class t extends e{static{this.formAssociated=!0}get form(){return this[z].form}get labels(){return this[z].labels}get name(){return this.getAttribute(`name`)??``}set name(i){this.setAttribute(`name`,i)}get disabled(){return this.hasAttribute(`disabled`)}set disabled(i){this.toggleAttribute(`disabled`,i)}attributeChangedCallback(i,a,o){if(i===`name`||i===`disabled`){let s=i===`disabled`?a!==null:a;this.requestUpdate(i,s);return}super.attributeChangedCallback(i,a,o)}requestUpdate(i,a,o){super.requestUpdate(i,a,o),this[z].setFormValue(this[Ye](),this[mt]())}[Ye](){throw new Error(`Implement [getFormValue]`)}[mt](){return this[Ye]()}formDisabledCallback(i){this.disabled=i}}return h([b({noAccessor:!0})],t.prototype,`name`,null),h([b({type:Boolean,noAccessor:!0})],t.prototype,`disabled`,null),t}var gt=Symbol(`createValidator`);var yt=Symbol(`getValidityAnchor`);var Hi=Symbol(`privateValidator`);var $e=Symbol(`privateSyncValidity`);var Tn=Symbol(`privateCustomValidationMessage`);function Dn(e){class t extends e{constructor(...i){super(...i),this[Tn]=``}get validity(){return this[$e](),this[z].validity}get validationMessage(){return this[$e](),this[z].validationMessage}get willValidate(){return this[$e](),this[z].willValidate}checkValidity(){return this[$e](),this[z].checkValidity()}reportValidity(){return this[$e](),this[z].reportValidity()}setCustomValidity(i){this[Tn]=i,this[$e]()}requestUpdate(i,a,o){super.requestUpdate(i,a,o),this[$e]()}firstUpdated(i){super.firstUpdated(i),this[$e]()}[$e](){this[Hi]||(this[Hi]=this[gt]());let{validity:i,validationMessage:a}=this[Hi].getValidity(),o=!!this[Tn],s=this[Tn]||a;this[z].setValidity(q$1(W({},i),{customError:o}),s,this[yt]()??void 0)}[gt](){throw new Error(`Implement [createValidator]`)}[yt](){throw new Error(`Implement [getValidityAnchor]`)}}return t}var Ln=class{constructor(e){this.currentValidity={validity:{},validationMessage:``},this.getCurrentState=e}getValidity(){let e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;let{validity:t,validationMessage:n}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:n,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}};var An=class extends Ln{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement(`input`),this.checkboxControl.type=`checkbox`),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,t){return e.checked===t.checked&&e.required===t.required}copy({checked:e,required:t}){return{checked:e,required:t}}};var Mn=class extends Ln{computeValidity(e){this.radioElement||(this.radioElement=document.createElement(`input`),this.radioElement.type=`radio`,this.radioElement.name=`group`);let t=!1,n=!1;for(let{checked:i,required:a}of e)a&&(t=!0),i&&(n=!0);return this.radioElement.checked=n,this.radioElement.required=t,{validity:{valueMissing:t&&!n},validationMessage:this.radioElement.validationMessage}}equals(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++){let i=e[n],a=t[n];if(i.checked!==a.checked||i.required!==a.required)return!1}return!0}copy(e){return e.map(({checked:t,required:n})=>({checked:t,required:n}))}};var Rn=class Fn{constructor(t,n){this.root=null,this.multiple=!1,this.canCancel=!1,this.preventSelectionDuringInitialFocus=!1,this.preventSelectionDuringSwitching=!1,this.dispatchNavigationClick=!1,this.dispatchInputChangeEvents=!0,this.getFocusableElement=i=>i,this.onConnected=()=>{},this.onDisconnected=()=>{},this.onBeforeSelect=()=>{},this.onAfterSelected=()=>{},this.onAfterNavigate=()=>{},this._suppressNextClick=!1,this._pointerIsDown=!1,this.handlePointerDown=()=>{this._pointerIsDown=!0},this.handlePointerUp=()=>{this._pointerIsDown=!1},this.handleFocus=()=>{this.updateRovingTabindex(),!this.preventSelectionDuringInitialFocus&&!this.host.checked&&!this._pointerIsDown&&(this.host.checked=!0,this.enforceMutexConsistency())},this.handleClick=i=>{if(this.host.disabled){i.preventDefault();return}if(this._suppressNextClick){this._suppressNextClick=!1;return}if(Fn._pendingNavigationClick.has(this.host)){Fn._pendingNavigationClick.delete(this.host);return}this.toggleSelection()},this.handleKeyDown=i=>{if(this.host.disabled)return;let{key:a}=i;if(a===` `||a===`Enter`){i.preventDefault(),this.toggleSelection(),this._suppressNextClick=!0,this.host.dispatchEvent(new MouseEvent(`click`,{bubbles:!0}));return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(a))switch(i.preventDefault(),a){case`ArrowDown`:case`ArrowRight`:this.moveFocus(`next`);break;case`ArrowUp`:case`ArrowLeft`:this.moveFocus(`prev`);break;case`Home`:this.moveFocus(`first`);break;case`End`:this.moveFocus(`last`)}},this.host=t,t.addController(this),n&&this.configure(n)}configure(t){t.multiple!==void 0&&(this.multiple=t.multiple),t.canCancel!==void 0&&(this.canCancel=t.canCancel),t.preventSelectionDuringInitialFocus!==void 0&&(this.preventSelectionDuringInitialFocus=t.preventSelectionDuringInitialFocus),t.preventSelectionDuringSwitching!==void 0&&(this.preventSelectionDuringSwitching=t.preventSelectionDuringSwitching),t.dispatchNavigationClick!==void 0&&(this.dispatchNavigationClick=t.dispatchNavigationClick),t.dispatchInputChangeEvents!==void 0&&(this.dispatchInputChangeEvents=t.dispatchInputChangeEvents),t.getFocusableElement!==void 0&&(this.getFocusableElement=t.getFocusableElement),t.onConnected!==void 0&&(this.onConnected=t.onConnected),t.onDisconnected!==void 0&&(this.onDisconnected=t.onDisconnected),t.onBeforeSelect!==void 0&&(this.onBeforeSelect=t.onBeforeSelect),t.onAfterSelected!==void 0&&(this.onAfterSelected=t.onAfterSelected),t.onAfterNavigate!==void 0&&(this.onAfterNavigate=t.onAfterNavigate)}get controls(){let t=this.host.getAttribute(`name`);return!t||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${CSS.escape(t)}"]`))}toggleSelection(){if(this.host.disabled)return;this.onBeforeSelect(this.host);let t=this.host.checked;this.canCancel?this.host.checked=!this.host.checked:this.host.checked=!0,!this.multiple&&this.host.checked&&this.enforceMutexConsistency(),this.onAfterSelected(this.host),this.updateRovingTabindex(),this.dispatchInputChangeEvents&&this.host.checked!==t&&(this.host.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.host.dispatchEvent(new Event(`change`,{bubbles:!0})))}handleCheckedChange(){!this.multiple&&this.host.checked&&this.enforceMutexConsistency(),this.updateRovingTabindex()}enforceMutexConsistency(){if(!(this.multiple||!this.host.checked))for(let t of this.controls)t!==this.host&&t.checked&&(t.checked=!1)}updateRovingTabindex(){if(!this.host.isConnected)return;let t=this.root?.activeElement;t?.shadowRoot&&(t=t.shadowRoot.activeElement);let n=this.controls,i;t&&(i=n.find(a=>t===this.getFocusableElement(a)||a===t)),i||(i=n.find(a=>a.checked&&!a.disabled)??n.find(a=>!a.disabled));for(let a of n){let o=this.getFocusableElement(a);if(!o)continue;let s=a===i?0:-1;o.tabIndex!==s&&(o.tabIndex=s)}}moveFocus(t){let n=this.controls;if(n.length===0)return;let i=n.indexOf(this.host),a=n.length,o,s;switch(t){case`first`:o=0,s=1;break;case`last`:o=a-1,s=-1;break;case`next`:o=(i+1)%a,s=1;break;case`prev`:o=(i-1+a)%a,s=-1}for(let p=0;p<a;p++){let u=n[o];if(u&&!u.disabled)break;o=((o+s)%a+a)%a}let l=n[o];if(!l||l===this.host||l.disabled)return;let d=l.checked,f=this.getFocusableElement(l)??l;if(f.tabIndex<0&&(f.tabIndex=0),f.focus(),!this.preventSelectionDuringSwitching&&!l.checked&&(l.checked=!0,!this.multiple))for(let p of this.controls)p!==l&&p.checked&&(p.checked=!1);this.dispatchInputChangeEvents&&!d&&l.checked&&(l.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),l.dispatchEvent(new Event(`change`,{bubbles:!0}))),this.dispatchNavigationClick&&(Fn._pendingNavigationClick.add(l),l.dispatchEvent(new MouseEvent(`click`,{bubbles:!0,composed:!0}))),this.onAfterNavigate(l)}static{this._pendingNavigationClick=new WeakSet}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`focus`,this.handleFocus),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`pointerdown`,this.handlePointerDown),this.host.addEventListener(`pointerup`,this.handlePointerUp),this.host.addEventListener(`pointercancel`,this.handlePointerUp),this.host.checked&&this.enforceMutexConsistency(),requestAnimationFrame(()=>this.updateRovingTabindex()),this.onConnected(this.host)}hostDisconnected(){this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`focus`,this.handleFocus),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`pointerdown`,this.handlePointerDown),this.host.removeEventListener(`pointerup`,this.handlePointerUp),this.host.removeEventListener(`pointercancel`,this.handlePointerUp),this.root=null,this.onDisconnected(this.host)}hostUpdated(){this.host.checked&&this.enforceMutexConsistency(),this.updateRovingTabindex()}};var As=Y(`--mdc-toggle-button`)(ji);var Ms=Y(`--mdc-toggle-button`)(Ft);var It=e=>k`
    &.extra-small { ${ue(`extra-small`,e)}; }
    &.small { ${ue(`small`,e)}; }
    &.medium { ${ue(`medium`,e)}; }
    &.large { ${ue(`large`,e)}; }
    &.extra-large { ${ue(`extra-large`,e)}; }
`;var Fs=()=>k`
    .container.round {${It(`container-shape-round`)};}
    .container.square {${It(`container-shape-square`)};}
    .container.round.togglable.selected {${It(`container-shape-round-selected`)};}
    .container.square.togglable.selected {${It(`container-shape-square-selected`)};}
    .container:not(.disable-morph).togglable:is(.selected, .unselected):has(.toggle-input:active) {${It(`container-shape-pressed-morph`)};}
`;var Bt=e=>k`
    &.extra-small mdc-focus-ring {${pe(`extra-small`,e)};}
    &.small mdc-focus-ring {${pe(`small`,e)};}
    &.medium mdc-focus-ring {${pe(`medium`,e)};}
    &.large mdc-focus-ring {${pe(`large`,e)};}
    &.extra-large mdc-focus-ring {${pe(`extra-large`,e)};}
`;var Rs=()=>k`
    .container.round {${Bt(`container-shape-round`)};}
    .container.square {${Bt(`container-shape-square`)};}
    .container.togglable.selected.round {${Bt(`container-shape-round-selected`)};}
    .container.togglable.selected.square {${Bt(`container-shape-square-selected`)};}
    .container:not(.disable-morph).togglable:is(.selected, .unselected):has(.toggle-input:active) {${Bt(`container-shape-pressed-morph`)};}
`;var be=(e,t)=>q(`--mdc-ripple`)({"hovered-color":`var(--_hovered-${e}-${t}-state-layer-color)`,"focused-color":`var(--_focused-${e}-${t}-state-layer-color)`,"pressed-color":`var(--_pressed-${e}-${t}-state-layer-color)`,"hovered-opacity":`var(--_hovered-state-layer-opacity)`,"focused-opacity":`var(--_focused-state-layer-opacity)`,"pressed-opacity":`var(--_pressed-state-layer-opacity)`})();var zs=Fe.map(e=>On.map(t=>`
    .container.togglable.${t}.${e} .background {
        background-color: var(--_enabled-${e}-${t}-container-color);
    }
    .container.togglable.${t}.${e} .label {
        color: var(--_enabled-${e}-${t}-label-color);
    }
    .container.togglable.${t}.${e} :is(::slotted([slot="icon"]), .icon) {
        color: var(--_enabled-${e}-${t}-icon-color);
    }
    .container.togglable.disabled.${t}.${e} .background {
        background-color: var(--_disabled-${e}-${t}-container-color);
        opacity: var(--_disabled-container-opacity);
    }
    .container.togglable.disabled.${t}.${e} .label {
        color: var(--_disabled-${e}-${t}-label-color);
        opacity: var(--_disabled-label-opacity);
    }
    .container.togglable.disabled.${t}.${e} :is(::slotted([slot="icon"]), .icon) {
        color: var(--_disabled-${e}-${t}-icon-color);
        opacity: var(--_disabled-icon-opacity);
    }
`).join(`

`)).join(`

`);var Vs=[`filled`,`filled-tonal`,`elevated`].map(e=>`
    .container.togglable.${e} mdc-elevation {
        transition-duration: 0ms;
        ${zt(`--_enabled-${e}-unselected-container-elevation`,`--_enabled-${e}-unselected-container-shadow-color`).cssText};
    }
`).join(`

`);var Is=k`
    .toggle-input {
        all: unset;
        appearance: none;
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        opacity: 0;
        outline: none;
        border: none;
        z-index: 1;
        cursor: inherit;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    ${M(zs)}

    .container.togglable.unselected.outlined .outline {
        border-color: var(--_enabled-outlined-unselected-outline-color);
    }
    .container.togglable.selected.outlined .outline {
        border-color: var(--_enabled-outlined-selected-outline-color);
    }

    ${M(Vs)}
    .container.togglable.disabled.elevated mdc-elevation {
        ${zt(`--_disabled-elevated-unselected-container-elevation`,`--_disabled-elevated-unselected-container-shadow-color`)};
    }

    .container.togglable.unselected.filled mdc-ripple {${be(`filled`,`unselected`)};}
    .container.togglable.selected.filled mdc-ripple {${be(`filled`,`selected`)};}
    .container.togglable.unselected.filled-tonal mdc-ripple {${be(`filled-tonal`,`unselected`)};}
    .container.togglable.selected.filled-tonal mdc-ripple {${be(`filled-tonal`,`selected`)};}
    .container.togglable.unselected.elevated mdc-ripple {${be(`elevated`,`unselected`)};}
    .container.togglable.selected.elevated mdc-ripple {${be(`elevated`,`selected`)};}
    .container.togglable.unselected.outlined mdc-ripple {${be(`outlined`,`unselected`)};}
    .container.togglable.selected.outlined mdc-ripple {${be(`outlined`,`selected`)};}
    .container.togglable.unselected.text mdc-ripple {${be(`text`,`unselected`)};}
    .container.togglable.selected.text mdc-ripple {${be(`text`,`selected`)};}
`;var Bs=k`
    @media (forced-colors: active) {
        .background {
            border: 1px solid CanvasText;
        }

        :host([disabled]) {
            --_disabled-filled-unselected-icon-color: GrayText;
            --_disabled-filled-selected-icon-color: GrayText;
            --_disabled-filled-tonal-unselected-icon-color: GrayText;
            --_disabled-filled-tonal-selected-icon-color: GrayText;
            --_disabled-elevated-unselected-icon-color: GrayText;
            --_disabled-elevated-selected-icon-color: GrayText;
            --_disabled-outlined-unselected-icon-color: GrayText;
            --_disabled-outlined-selected-icon-color: GrayText;
            --_disabled-text-unselected-icon-color: GrayText;
            --_disabled-text-selected-icon-color: GrayText;
            --_disabled-icon-opacity: 1;
            --_disabled-container-opacity: 1;
            --_disabled-filled-unselected-label-color: GrayText;
            --_disabled-filled-selected-label-color: GrayText;
            --_disabled-filled-tonal-unselected-label-color: GrayText;
            --_disabled-filled-tonal-selected-label-color: GrayText;
            --_disabled-elevated-unselected-label-color: GrayText;
            --_disabled-elevated-selected-label-color: GrayText;
            --_disabled-outlined-unselected-label-color: GrayText;
            --_disabled-outlined-selected-label-color: GrayText;
            --_disabled-text-unselected-label-color: GrayText;
            --_disabled-text-selected-label-color: GrayText;
            --_disabled-label-opacity: 1;
            --_disabled-filled-unselected-container-color: Canvas;
            --_disabled-filled-selected-container-color: Canvas;
            --_disabled-filled-tonal-unselected-container-color: Canvas;
            --_disabled-filled-tonal-selected-container-color: Canvas;
            --_disabled-elevated-unselected-container-color: Canvas;
            --_disabled-elevated-selected-container-color: Canvas;
            --_disabled-outlined-unselected-container-color: Canvas;
            --_disabled-outlined-selected-container-color: Canvas;
            --_disabled-text-unselected-container-color: Canvas;
            --_disabled-text-selected-container-color: Canvas;
            --_disabled-outlined-unselected-outline-color: GrayText;
            --_disabled-outlined-selected-outline-color: GrayText;
        }

        :host([disabled]) .container.outlined .outline {
            border-color: GrayText;
        }

        .container.outlined .outline {
            border-color: ButtonText;
        }

        .container.text {
            border: 1px solid transparent;
        }

        mdc-ripple {
            display: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .container,
        .container * {
            transition: none;
        }
    }

    @media (prefers-contrast: more) {
        .container .outline {
            border-color: CanvasText;
        }
        .container .label {
            color: CanvasText;
        }
        .container :is(::slotted([slot="icon"]), .icon) {
            color: CanvasText;
        }
    }

    @media (prefers-contrast: less) {
        .container .outline {
            border-color: GrayText;
        }
    }
`;var Sa=[k`:host {${As}${Ms};}`,Fs(),Rs(),Bi(),Ni,Is,qi,Bs];var Re=class extends ye(Dn,Pn)(le){static{this.styles=Sa}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}constructor(){super(),this.type=`checkbox`,this.value=`on`,this.required=!1,this.variant=`filled`,this.checked=!1,this.selectionController=new Rn(this,{multiple:this.type===`checkbox`,canCancel:this.type===`checkbox`,preventSelectionDuringInitialFocus:this.type===`checkbox`,preventSelectionDuringSwitching:this.type===`checkbox`,getFocusableElement:t=>t}),this.tabIndex=0,this[z].role=this.type}connectedCallback(){super.connectedCallback(),this.hasAttribute(`default-checked`)&&(this.checked=!0)}willUpdate(t){if(super.willUpdate(t),t.has(`type`)){let n=this.type===`checkbox`;this.selectionController.configure({multiple:n,canCancel:n,preventSelectionDuringInitialFocus:n,preventSelectionDuringSwitching:n}),this[z].role=this.type}t.has(`checked`)&&(this[z].ariaChecked=String(this.checked)),t.has(`required`)&&(this[z].ariaRequired=String(this.required))}getRenderClasses(){return q$1(W({},super.getRenderClasses()),{togglable:!0,selected:this.checked,unselected:!this.checked})}[Ye](){return this.checked?this.value:null}[mt](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute(`default-checked`)}formStateRestoreCallback(t){this.checked=t===`true`}[gt](){return this.type!==`radio`?new An(()=>({checked:this.checked??!1,required:this.required??!1})):new Mn(()=>this.selectionController?.controls??[this])}[yt](){return this.buttonElement}};h([b({type:String,reflect:!0})],Re.prototype,`type`,void 0);h([b({type:String})],Re.prototype,`value`,void 0);h([b({type:Boolean,reflect:!0})],Re.prototype,`required`,void 0);h([b({type:String,reflect:!1})],Re.prototype,`variant`,void 0);h([b({type:Boolean,reflect:!0})],Re.prototype,`checked`,void 0);Re=h([se(`mdc-toggle-button`)],Re);var qt=Math.min;var ze=Math.max;var Ut=Math.round;var Kt=Math.floor;var ve=e=>({x:e,y:e});var Ns={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Ca(e,t,n){return ze(e,qt(t,n))}function jt(e,t){return typeof e==`function`?e(t):e}function Je(e){return e.split(`-`)[0]}function Ht(e){return e.split(`-`)[1]}function Gi(e){return e===`x`?`y`:`x`}function Yi(e){return e===`y`?`height`:`width`}function ke(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Ji(e){return Gi(ke(e))}function Ea(e,t,n){n===void 0&&(n=!1);let i=Ht(e),a=Ji(e),o=Yi(a),s=a===`x`?i===(n?`end`:`start`)?`right`:`left`:i===`start`?`bottom`:`top`;return t.reference[o]>t.floating[o]&&(s=Nt(s)),[s,Nt(s)]}function $a(e){let t=Nt(e);return[Wi(e),t,Wi(t)]}function Wi(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var xa=[`left`,`right`];var wa=[`right`,`left`];var qs=[`top`,`bottom`];var Us=[`bottom`,`top`];function Ks(e,t,n){switch(e){case`top`:case`bottom`:return n?t?wa:xa:t?xa:wa;case`left`:case`right`:return t?qs:Us;default:return[]}}function ka(e,t,n,i){let a=Ht(e),o=Ks(Je(e),n===`start`,i);return a&&(o=o.map(s=>s+`-`+a),t&&(o=o.concat(o.map(Wi)))),o}function Nt(e){let t=Je(e);return Ns[t]+e.slice(t.length)}function js(e){var t,n,i,a;return{top:(t=e.top)!=null?t:0,right:(n=e.right)!=null?n:0,bottom:(i=e.bottom)!=null?i:0,left:(a=e.left)!=null?a:0}}function _a(e){return typeof e!=`number`?js(e):{top:e,right:e,bottom:e,left:e}}function bt(e){let{x:t,y:n,width:i,height:a}=e;return{width:i,height:a,top:n,left:t,right:t+i,bottom:n+a,x:t,y:n}}function Oa(e,t,n){let{reference:i,floating:a}=e,o=ke(t),s=Ji(t),l=Yi(s),d=Je(t),f=o===`y`,p=i.x+i.width/2-a.width/2,u=i.y+i.height/2-a.height/2,m=i[l]/2-a[l]/2,v;switch(d){case`top`:v={x:p,y:i.y-a.height};break;case`bottom`:v={x:p,y:i.y+i.height};break;case`right`:v={x:i.x+i.width,y:u};break;case`left`:v={x:i.x-a.width,y:u};break;default:v={x:i.x,y:i.y}}let E=Ht(t);return E&&(v[s]+=m*(E===`end`?1:-1)*(n&&f?-1:1)),v}async function Hs(e,t){var n;t===void 0&&(t={});let{x:i,y:a,platform:o,rects:s,elements:l,strategy:d}=e,{boundary:f=`clippingAncestors`,rootBoundary:p=`viewport`,elementContext:u=`floating`,altBoundary:m=!1,padding:v=0}=jt(t,e),E=_a(v),$=l[m?u===`floating`?`reference`:`floating`:u],P=bt(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement($)))==null||n?$:$.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:f,rootBoundary:p,strategy:d})),D=u===`floating`?{x:i,y:a,width:s.floating.width,height:s.floating.height}:s.reference,V=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),K=await(o.isElement==null?void 0:o.isElement(V))&&await(o.getScale==null?void 0:o.getScale(V))||{x:1,y:1},W=bt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:D,offsetParent:V,strategy:d}):D);return{top:(P.top-W.top+E.top)/K.y,bottom:(W.bottom-P.bottom+E.bottom)/K.y,left:(P.left-W.left+E.left)/K.x,right:(W.right-P.right+E.right)/K.x}}var Ws=50;var Pa=async(e,t,n)=>{let{placement:i=`bottom`,strategy:a=`absolute`,middleware:o=[],platform:s}=n,l=s.detectOverflow?s:q$1(W({},s),{detectOverflow:Hs}),d=await(s.isRTL==null?void 0:s.isRTL(t)),f=await s.getElementRects({reference:e,floating:t,strategy:a}),{x:p,y:u}=Oa(f,i,d),m=i,v=0,E={};for(let $=0;$<o.length;$++){let P=o[$];if(!P)continue;let{name:D,fn:V}=P,{x:K,y:W$1,data:Ce,reset:re}=await V({x:p,y:u,initialPlacement:i,placement:m,strategy:a,middlewareData:E,rects:f,platform:l,elements:{reference:e,floating:t}});p=K??p,u=W$1??u,E[D]=W(W({},E[D]),Ce),re&&v<Ws&&(v++,typeof re==`object`&&(re.placement&&(m=re.placement),re.rects&&(f=re.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:a}):re.rects),{x:p,y:u}=Oa(f,m,d)),$=-1)}return{x:p,y:u,placement:m,strategy:a,middlewareData:E}};var Ta=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n,i;let{placement:a,middlewareData:o,rects:s,initialPlacement:l,platform:d,elements:f}=t,dr=jt(e,t),{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:v=`bestFit`,fallbackAxisSideDirection:E=`none`,flipAlignment:$=!0}=dr,P=mm(dr,[`mainAxis`,`crossAxis`,`fallbackPlacements`,`fallbackStrategy`,`fallbackAxisSideDirection`,`flipAlignment`]);if((n=o.arrow)!=null&&n.alignmentOffset)return{};let D=Je(a),V=ke(l),K=Je(l)===l,W=await(d.isRTL==null?void 0:d.isRTL(f.floating)),Ce=m||(K||!$?[Nt(l)]:$a(l)),re=E!==`none`;!m&&re&&Ce.push(...ka(l,$,E,W));let Qt=[l,...Ce],tt=await d.detectOverflow(t,P),Pe=[],nt=((i=o.flip)==null?void 0:i.overflows)||[];if(p&&Pe.push(tt[D]),u){let Ie=Ea(a,s,W);Pe.push(tt[Ie[0]],tt[Ie[1]])}if(nt=[...nt,{placement:a,overflows:Pe}],!Pe.every(Ie=>Ie<=0)){var sr,lr;let Ie=(((sr=o.flip)==null?void 0:sr.index)||0)+1,Jn=Qt[Ie];if(Jn&&(!(u===`alignment`&&V!==ke(Jn))||nt.every(Ee=>ke(Ee.placement)===V?Ee.overflows[0]>0:!0)))return{data:{index:Ie,overflows:nt},reset:{placement:Jn}};let Et=(lr=nt.filter(Ee=>Ee.overflows[0]<=0).sort((Ee,Te)=>Ee.overflows[1]-Te.overflows[1])[0])==null?void 0:lr.placement;if(!Et)switch(v){case`bestFit`:{var cr;let Ee=(cr=nt.filter(Te=>{if(re){let De=ke(Te.placement);return De===V||De===`y`}return!0}).map(Te=>[Te.placement,Te.overflows.filter(De=>De>0).reduce((De,lo)=>De+lo,0)]).sort((Te,De)=>Te[1]-De[1])[0])==null?void 0:cr[0];Ee&&(Et=Ee);break}case`initialPlacement`:Et=l}if(a!==Et)return{reset:{placement:Et}}}return{}}}};var Gs=new Set([`left`,`top`]);async function Ys(e,t){let{placement:n,platform:i,elements:a}=e,o=await(i.isRTL==null?void 0:i.isRTL(a.floating)),s=Je(n),l=Ht(n),d=ke(n)===`y`,f=Gs.has(s)?-1:1,p=o&&d?-1:1,u=jt(t,e),{mainAxis:m,crossAxis:v,alignmentAxis:E}=typeof u==`number`?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return l&&typeof E==`number`&&(v=l===`end`?E*-1:E),d?{x:v*p,y:m*f}:{x:m*f,y:v*p}}var Da=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n,i;let{x:a,y:o,placement:s,middlewareData:l}=t,d=await Ys(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:a+d.x,y:o+d.y,data:q$1(W({},d),{placement:s})}}}};var La=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:i,placement:a,platform:o}=t,V=jt(e,t),{mainAxis:s=!0,crossAxis:l=!1,limiter:d={fn:K=>{let{x:W,y:Ce}=K;return{x:W,y:Ce}}}}=V,f=mm(V,[`mainAxis`,`crossAxis`,`limiter`]),p={x:n,y:i},u=await o.detectOverflow(t,f),m=ke(a),v=Gi(m),E=p[v],$=p[m],P=(K,W)=>Ca(W+u[K===`y`?`top`:`left`],W,W-u[K===`y`?`bottom`:`right`]);s&&(E=P(v,E)),l&&($=P(m,$));let D=d.fn(q$1(W({},t),{[v]:E,[m]:$}));return q$1(W({},D),{data:{x:D.x-n,y:D.y-i,enabled:{[v]:s,[m]:l}}})}}};function zn(){return typeof window<`u`}function Xe(e){return Ma(e)?(e.nodeName||``).toLowerCase():`#document`}function te(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Se(e){var t;return(t=(Ma(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ma(e){return zn()?e instanceof Node||e instanceof te(e).Node:!1}function he(e){return zn()?e instanceof Element||e instanceof te(e).Element:!1}function _e(e){return zn()?e instanceof HTMLElement||e instanceof te(e).HTMLElement:!1}function Aa(e){return!zn()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof te(e).ShadowRoot}function Wt(e){let{overflow:t,overflowX:n,overflowY:i,display:a}=fe(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&a!==`inline`&&a!==`contents`}function Fa(e){return/^(table|td|th)$/.test(Xe(e))}function Gt(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Js=/transform|translate|scale|rotate|perspective|filter/;var Zs=/paint|layout|strict|content/;var Ze=e=>!!e&&e!==`none`;var Zi;function Vn(e){let t=he(e)?fe(e):e;return Ze(t.transform)||Ze(t.translate)||Ze(t.scale)||Ze(t.rotate)||Ze(t.perspective)||!In()&&(Ze(t.backdropFilter)||Ze(t.filter))||Js.test(t.willChange||``)||Zs.test(t.contain||``)}function Ra(e){let t=Ve(e);for(;_e(t)&&!St(t);){if(Vn(t))return t;if(Gt(t))return null;t=Ve(t)}return null}function In(){return Zi??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Zi}function St(e){return/^(html|body|#document)$/.test(Xe(e))}function fe(e){return te(e).getComputedStyle(e)}function Yt(e){return he(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ve(e){if(Xe(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Aa(e)&&e.host||Se(e);return Aa(t)?t.host:t}function za(e){let t=Ve(e);return St(t)?(e.ownerDocument||e).body:_e(t)&&Wt(t)?t:za(t)}function vt(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);let a=za(e),o=a===((i=e.ownerDocument)==null?void 0:i.body),s=te(a);if(o){let l=Bn(s);return t.concat(s,s.visualViewport||[],Wt(a)?a:[],l&&n?vt(l):[])}else return t.concat(a,vt(a,[],n))}function Bn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ba(e){let t=fe(e),n=parseFloat(t.width)||0,i=parseFloat(t.height)||0,a=_e(e),o=a?e.offsetWidth:n,s=a?e.offsetHeight:i,l=Ut(n)!==o||Ut(i)!==s;return l&&(n=o,i=s),{width:n,height:i,$:l}}function Qi(e){return he(e)?e:e.contextElement}function xt(e){let t=Qi(e);if(!_e(t))return ve(1);let n=t.getBoundingClientRect(),{width:i,height:a,$:o}=Ba(t),s=(o?Ut(n.width):n.width)/i,l=(o?Ut(n.height):n.height)/a;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}var Xs=ve(0);function Na(e){let t=te(e);return!In()||!t.visualViewport?Xs:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qs(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===te(e)}function Qe(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);let a=e.getBoundingClientRect(),o=Qi(e),s=ve(1);t&&(i?he(i)&&(s=xt(i)):s=xt(e));let l=Qs(o,n,i)?Na(o):ve(0),d=(a.left+l.x)/s.x,f=(a.top+l.y)/s.y,p=a.width/s.x,u=a.height/s.y;if(o&&i){let m=te(o),v=he(i)?te(i):i,E=m,$=Bn(E);for(;$&&v!==E;){let P=xt($),D=$.getBoundingClientRect(),V=fe($),K=D.left+($.clientLeft+parseFloat(V.paddingLeft))*P.x,W=D.top+($.clientTop+parseFloat(V.paddingTop))*P.y;d*=P.x,f*=P.y,p*=P.x,u*=P.y,d+=K,f+=W,E=te($),$=Bn(E)}}return bt({width:p,height:u,x:d,y:f})}function Nn(e,t){let n=Yt(e).scrollLeft;return t?t.left+n:Qe(Se(e)).left+n}function qa(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Nn(e,n),y:n.top+t.scrollTop}}function el(e){let{elements:t,rect:n,offsetParent:i,strategy:a}=e,o=a===`fixed`,s=Se(i),l=t?Gt(t.floating):!1;if(i===s||l&&o)return n;let d={scrollLeft:0,scrollTop:0},f=ve(1),p=ve(0),u=_e(i);if((u||!o)&&((Xe(i)!==`body`||Wt(s))&&(d=Yt(i)),u)){let v=Qe(i);f=xt(i),p.x=v.x+i.clientLeft,p.y=v.y+i.clientTop}let m=s&&!u&&!o?qa(s,d):ve(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-d.scrollLeft*f.x+p.x+m.x,y:n.y*f.y-d.scrollTop*f.y+p.y+m.y}}function tl(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function nl(e){let t=Yt(e),n=e.ownerDocument.body,i=ze(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),a=ze(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),o=-t.scrollLeft+Nn(e),s=-t.scrollTop;return fe(n).direction===`rtl`&&(o+=ze(e.clientWidth,n.clientWidth)-i),{width:i,height:a,x:o,y:s}}var il=25;function rl(e,t,n){n===void 0&&(n=`viewport`);let i=n===`layoutViewport`,a=te(e),o=Se(e),s=a.visualViewport,l=o.clientWidth,d=o.clientHeight,f=0,p=0;if(s){let u=!In()||t===`fixed`;i?u||(f=-s.offsetLeft,p=-s.offsetTop):(l=s.width,d=s.height,u&&(f=s.offsetLeft,p=s.offsetTop))}if(Nn(o)<=0){let u=o.ownerDocument,m=u.body,v=getComputedStyle(m),E=u.compatMode===`CSS1Compat`&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,$=Math.abs(o.clientWidth-m.clientWidth-E),P=getComputedStyle(o).scrollbarGutter===`stable both-edges`?$/2:$;P<=il&&(l-=P)}return{width:l,height:d,x:f,y:p}}function al(e,t){let n=Qe(e,!0,t===`fixed`),i=n.top+e.clientTop,a=n.left+e.clientLeft,o=xt(e);return{width:e.clientWidth*o.x,height:e.clientHeight*o.y,x:a*o.x,y:i*o.y}}function Va(e,t,n){let i;if(t===`viewport`||t===`layoutViewport`)i=rl(e,n,t);else if(t===`document`)i=nl(Se(e));else if(he(t))i=al(t,n);else{let a=Na(e);i={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return bt(i)}function ol(e,t){let n=t.get(e);if(n)return n;let i=vt(e,[],!1).filter(l=>he(l)&&Xe(l)!==`body`),a=null,o=fe(e).position===`fixed`,s=o?Ve(e):e;for(;he(s)&&!St(s);){let l=fe(s),d=Vn(s),f=a?a.position:o?`fixed`:``;!d&&(f===`fixed`||f===`absolute`&&l.position===`static`)?i=i.filter(p=>p!==s):a=l,s=Ve(s)}return t.set(e,i),i}function sl(e){let{element:t,boundary:n,rootBoundary:i,strategy:a}=e,o=[...n===`clippingAncestors`?Gt(t)?[]:ol(t,this._c):[].concat(n),i],s=Va(t,o[0],a),l=s.top,d=s.right,f=s.bottom,p=s.left;for(let u=1;u<o.length;u++){let m=Va(t,o[u],a);l=ze(m.top,l),d=qt(m.right,d),f=qt(m.bottom,f),p=ze(m.left,p)}return{width:d-p,height:f-l,x:p,y:l}}function ll(e){let{width:t,height:n}=Ba(e);return{width:t,height:n}}function cl(e,t,n){let i=_e(t),a=Se(t),o=n===`fixed`,s=Qe(e,!0,o,t),l={scrollLeft:0,scrollTop:0},d=ve(0);if((i||!o)&&((Xe(t)!==`body`||Wt(a))&&(l=Yt(t)),i)){let p=Qe(t,!0,o,t);d.x=p.x+t.clientLeft,d.y=p.y+t.clientTop}!i&&a&&(d.x=Nn(a));let f=a&&!i&&!o?qa(a,l):ve(0);return{x:s.left+l.scrollLeft-d.x-f.x,y:s.top+l.scrollTop-d.y-f.y,width:s.width,height:s.height}}function Xi(e){return fe(e).position===`static`}function Ia(e,t){if(!_e(e)||fe(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Se(e)===n&&(n=n.ownerDocument.body),n}function Ua(e,t){let n=te(e);if(Gt(e))return n;if(!_e(e)){let a=Ve(e);for(;a&&!St(a);){if(he(a)&&!Xi(a))return a;a=Ve(a)}return n}let i=Ia(e,t);for(;i&&Fa(i)&&Xi(i);)i=Ia(i,t);return i&&St(i)&&Xi(i)&&!Vn(i)?n:i||Ra(e)||n}var dl=async function(e){let t=this.getOffsetParent||Ua,n=this.getDimensions,i=await n(e.floating);return{reference:cl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ul(e){return fe(e).direction===`rtl`}var pl={convertOffsetParentRelativeRectToViewportRelativeRect:el,getDocumentElement:Se,getClippingRect:sl,getOffsetParent:Ua,getElementRects:dl,getClientRects:tl,getDimensions:ll,getScale:xt,isElement:he,isRTL:ul};function Ka(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function hl(e,t,n){let i=null,a,o=Se(e);function s(){var p;clearTimeout(a),(p=i)==null||p.disconnect(),i=null}function l(p,u){p===void 0&&(p=!1),u===void 0&&(u=1),s();let m=e.getBoundingClientRect(),{left:v,top:E,width:$,height:P}=m;if(p||t(),!$||!P)return;let D=Kt(E),V=Kt(o.clientWidth-(v+$)),K=Kt(o.clientHeight-(E+P)),W$2=Kt(v),Ce={rootMargin:-D+`px `+-V+`px `+-K+`px `+-W$2+`px`,threshold:ze(0,qt(1,u))||1},re=!0;function Qt(tt){let Pe=tt[0].intersectionRatio;if(!Ka(m,e.getBoundingClientRect()))return l();if(Pe!==u){if(!re)return l();Pe?l(!1,Pe):a=setTimeout(()=>{l(!1,1e-7)},1e3)}re=!1}try{i=new IntersectionObserver(Qt,q$1(W({},Ce),{root:o.ownerDocument}))}catch{i=new IntersectionObserver(Qt,Ce)}i.observe(e)}let d=te(e),f=()=>l(n);return d.addEventListener(`resize`,f),l(!0),()=>{d.removeEventListener(`resize`,f),s()}}function ja(e,t,n,i){i===void 0&&(i={});let{ancestorScroll:a=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver==`function`,layoutShift:l=typeof IntersectionObserver==`function`,animationFrame:d=!1}=i,f=Qi(e),p=a||o?[...f?vt(f):[],...t?vt(t):[]]:[];p.forEach(D=>{a&&D.addEventListener(`scroll`,n),o&&D.addEventListener(`resize`,n)});let u=f&&l?hl(f,n,o):null,m=-1,v=null;s&&(v=new ResizeObserver(D=>{let[V]=D;V&&V.target===f&&v&&t&&(v.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var K;(K=v)==null||K.observe(t)})),n()}),f&&!d&&v.observe(f),t&&v.observe(t));let E,$=d?Qe(e):null;d&&P();function P(){let D=Qe(e);$&&!Ka($,D)&&n(),$=D,E=requestAnimationFrame(P)}return n(),()=>{var D;p.forEach(V=>{a&&V.removeEventListener(`scroll`,n),o&&V.removeEventListener(`resize`,n)}),u?.(),(D=v)==null||D.disconnect(),v=null,d&&cancelAnimationFrame(E)}}var Ha=Da;var Wa=La;var Ga=Ta;var Ya=(e,t,n)=>{let i=new Map,a=n??{},o=q$1(W(W({},pl),a.platform),{_c:i});return Pa(e,t,q$1(W({},a),{platform:o}))};var Ja=e=>t=>{if(!Number.isInteger(e)||!Number.isInteger(t))throw new Error(`Year and month must be integers`);if(t<1||t>12)throw new Error(`Month must be in 1..12`);return new Date(Date.UTC(e,t,0)).getUTCDate()};var ne=e=>{if(!Number.isInteger(e.year)||!Number.isInteger(e.month)||!Number.isInteger(e.day))throw new Error(`Date parts must be integers`);if(e.month<1||e.month>12)throw new Error(`Month must be in 1..12`);let t=Ja(e.year)(e.month);if(e.day<1||e.day>t)throw new Error(`Day out of range for month`);return Date.UTC(e.year,e.month-1,e.day)};var R=e=>{if(!Number.isInteger(e))throw new Error(`Millis must be an integer`);let t=new Date(e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate()}};var Za=e=>t=>{if(!Number.isInteger(e)||!Number.isInteger(t))throw new Error(`Millis and delta must be integers`);let n=R(e),i=n.year*12+(n.month-1)+t,a=Math.floor(i/12),o=i%12+1,s=Ja(a)(o);return ne({year:a,month:o,day:Math.min(n.day,s)})};var Jt=e=>(t,n)=>{if(!Number.isInteger(e))throw new Error(`Millis must be an integer`);return!(t!==null&&e<t||n!==null&&e>n)};var wt=e=>(t,n)=>t!==null&&e<t?t:n!==null&&e>n?n:e;var Xa=e=>t=>n=>{if(!Number.isInteger(e))throw new Error(`Displayed millis must be an integer`);if(!Number.isInteger(t)||t<0||t>6)throw new Error(`firstDayOfWeek must be 0..6`);let i=R(e),a=ne({year:i.year,month:i.month,day:1}),o=a-(new Date(a).getUTCDay()-t+7)%7*864e5,s=[];for(let l=0;l<6;l++){let d=[];for(let f=0;f<7;f++){let p=o+(l*7+f)*864e5,u=R(p);d.push({millis:p,inMonth:u.month===i.month,disabled:n(p)})}s.push(d)}return s};var er=e=>t=>{if(!Number.isInteger(e)||!Number.isInteger(t))throw new Error(`Years must be integers`);if(t<e)throw new Error(`maxYear must be >= minYear`);let n=[];for(let i=e;i<=t;i++)n.push(i);return n};var qn=e=>{let t=R(e),n=String(t.month).padStart(2,`0`),i=String(t.day).padStart(2,`0`);return`${t.year}-${n}-${i}`};var Zt=e=>{let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e.trim());if(!t)throw new Error(`Date must be YYYY-MM-DD`);return ne({year:Number(t[1]),month:Number(t[2]),day:Number(t[3])})};var et=e=>{let t=R(e);return`${String(t.month).padStart(2,`0`)}/${String(t.day).padStart(2,`0`)}/${t.year}`};var fl=e=>{let t=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(e.trim());if(!t)throw new Error(`Date must be MM/DD/YYYY`);let n=Number(t[1]),i=Number(t[2]);return ne({year:Number(t[3]),month:n,day:i})};var Un=e=>{let t=e.trim();if(t===``)throw new Error(`Date must not be empty`);return t.includes(`/`)?fl(t):Zt(t)};var Kn={"extra-small-container-shape-round-start-start":c.Full,"extra-small-container-shape-round-start-end":c.Full,"extra-small-container-shape-round-end-start":c.Full,"extra-small-container-shape-round-end-end":c.Full,"extra-small-container-shape-square-start-start":c.Medium,"extra-small-container-shape-square-start-end":c.Medium,"extra-small-container-shape-square-end-start":c.Medium,"extra-small-container-shape-square-end-end":c.Medium,"extra-small-container-shape-pressed-morph-start-start":c.Small,"extra-small-container-shape-pressed-morph-start-end":c.Small,"extra-small-container-shape-pressed-morph-end-start":c.Small,"extra-small-container-shape-pressed-morph-end-end":c.Small,"extra-small-container-shape-round-selected-start-start":c.Medium,"extra-small-container-shape-round-selected-start-end":c.Medium,"extra-small-container-shape-round-selected-end-start":c.Medium,"extra-small-container-shape-round-selected-end-end":c.Medium,"extra-small-container-shape-square-selected-start-start":c.Full,"extra-small-container-shape-square-selected-start-end":c.Full,"extra-small-container-shape-square-selected-end-start":c.Full,"extra-small-container-shape-square-selected-end-end":c.Full,"small-container-shape-round-start-start":c.Full,"small-container-shape-round-start-end":c.Full,"small-container-shape-round-end-start":c.Full,"small-container-shape-round-end-end":c.Full,"small-container-shape-square-start-start":c.Medium,"small-container-shape-square-start-end":c.Medium,"small-container-shape-square-end-start":c.Medium,"small-container-shape-square-end-end":c.Medium,"small-container-shape-pressed-morph-start-start":c.Small,"small-container-shape-pressed-morph-start-end":c.Small,"small-container-shape-pressed-morph-end-start":c.Small,"small-container-shape-pressed-morph-end-end":c.Small,"small-container-shape-round-selected-start-start":c.Medium,"small-container-shape-round-selected-start-end":c.Medium,"small-container-shape-round-selected-end-start":c.Medium,"small-container-shape-round-selected-end-end":c.Medium,"small-container-shape-square-selected-start-start":c.Full,"small-container-shape-square-selected-start-end":c.Full,"small-container-shape-square-selected-end-start":c.Full,"small-container-shape-square-selected-end-end":c.Full,"medium-container-shape-round-start-start":c.Full,"medium-container-shape-round-start-end":c.Full,"medium-container-shape-round-end-start":c.Full,"medium-container-shape-round-end-end":c.Full,"medium-container-shape-square-start-start":c.Large,"medium-container-shape-square-start-end":c.Large,"medium-container-shape-square-end-start":c.Large,"medium-container-shape-square-end-end":c.Large,"medium-container-shape-pressed-morph-start-start":c.Medium,"medium-container-shape-pressed-morph-start-end":c.Medium,"medium-container-shape-pressed-morph-end-start":c.Medium,"medium-container-shape-pressed-morph-end-end":c.Medium,"medium-container-shape-round-selected-start-start":c.Large,"medium-container-shape-round-selected-start-end":c.Large,"medium-container-shape-round-selected-end-start":c.Large,"medium-container-shape-round-selected-end-end":c.Large,"medium-container-shape-square-selected-start-start":c.Full,"medium-container-shape-square-selected-start-end":c.Full,"medium-container-shape-square-selected-end-start":c.Full,"medium-container-shape-square-selected-end-end":c.Full,"large-container-shape-round-start-start":c.Full,"large-container-shape-round-start-end":c.Full,"large-container-shape-round-end-start":c.Full,"large-container-shape-round-end-end":c.Full,"large-container-shape-square-start-start":c.ExtraLarge,"large-container-shape-square-start-end":c.ExtraLarge,"large-container-shape-square-end-start":c.ExtraLarge,"large-container-shape-square-end-end":c.ExtraLarge,"large-container-shape-pressed-morph-start-start":c.Large,"large-container-shape-pressed-morph-start-end":c.Large,"large-container-shape-pressed-morph-end-start":c.Large,"large-container-shape-pressed-morph-end-end":c.Large,"large-container-shape-round-selected-start-start":c.ExtraLarge,"large-container-shape-round-selected-start-end":c.ExtraLarge,"large-container-shape-round-selected-end-start":c.ExtraLarge,"large-container-shape-round-selected-end-end":c.ExtraLarge,"large-container-shape-square-selected-start-start":c.Full,"large-container-shape-square-selected-start-end":c.Full,"large-container-shape-square-selected-end-start":c.Full,"large-container-shape-square-selected-end-end":c.Full,"extra-large-container-shape-round-start-start":c.Full,"extra-large-container-shape-round-start-end":c.Full,"extra-large-container-shape-round-end-start":c.Full,"extra-large-container-shape-round-end-end":c.Full,"extra-large-container-shape-square-start-start":c.ExtraLarge,"extra-large-container-shape-square-start-end":c.ExtraLarge,"extra-large-container-shape-square-end-start":c.ExtraLarge,"extra-large-container-shape-square-end-end":c.ExtraLarge,"extra-large-container-shape-pressed-morph-start-start":c.Large,"extra-large-container-shape-pressed-morph-start-end":c.Large,"extra-large-container-shape-pressed-morph-end-start":c.Large,"extra-large-container-shape-pressed-morph-end-end":c.Large,"extra-large-container-shape-round-selected-start-start":c.ExtraLarge,"extra-large-container-shape-round-selected-start-end":c.ExtraLarge,"extra-large-container-shape-round-selected-end-start":c.ExtraLarge,"extra-large-container-shape-round-selected-end-end":c.ExtraLarge,"extra-large-container-shape-square-selected-start-start":c.Full,"extra-large-container-shape-square-selected-start-end":c.Full,"extra-large-container-shape-square-selected-end-start":c.Full,"extra-large-container-shape-square-selected-end-end":c.Full};var jn={"extra-small-container-height":`32px`,"extra-small-icon-size":`20px`,"extra-small-narrow-leading-space":`4px`,"extra-small-narrow-trailing-space":`4px`,"extra-small-default-leading-space":`6px`,"extra-small-default-trailing-space":`6px`,"extra-small-wide-leading-space":`10px`,"extra-small-wide-trailing-space":`10px`,"extra-small-outline-width":`1px`,"small-container-height":`40px`,"small-icon-size":`24px`,"small-narrow-leading-space":`4px`,"small-narrow-trailing-space":`4px`,"small-default-leading-space":`8px`,"small-default-trailing-space":`8px`,"small-wide-leading-space":`14px`,"small-wide-trailing-space":`14px`,"small-outline-width":`1px`,"medium-container-height":`56px`,"medium-icon-size":`24px`,"medium-narrow-leading-space":`12px`,"medium-narrow-trailing-space":`12px`,"medium-default-leading-space":`16px`,"medium-default-trailing-space":`16px`,"medium-wide-leading-space":`24px`,"medium-wide-trailing-space":`24px`,"medium-outline-width":`1px`,"large-container-height":`96px`,"large-icon-size":`32px`,"large-narrow-leading-space":`16px`,"large-narrow-trailing-space":`16px`,"large-default-leading-space":`32px`,"large-default-trailing-space":`32px`,"large-wide-leading-space":`48px`,"large-wide-trailing-space":`48px`,"large-outline-width":`2px`,"extra-large-container-height":`136px`,"extra-large-icon-size":`40px`,"extra-large-narrow-leading-space":`32px`,"extra-large-narrow-trailing-space":`32px`,"extra-large-default-leading-space":`48px`,"extra-large-default-trailing-space":`48px`,"extra-large-wide-leading-space":`72px`,"extra-large-wide-trailing-space":`72px`,"extra-large-outline-width":`3px`};var tr=H(q$1(W(W({},jn),Kn),{"enabled-outline-color":r.OutlineVariant,"enabled-outline-color-toggle-unselected":r.OutlineVariant,"enabled-outline-color-toggle-selected":`transparent`,"enabled-container-color":`transparent`,"enabled-container-color-toggle-unselected":`transparent`,"enabled-container-color-toggle-selected":r.InverseSurface,"enabled-icon-color":r.OnSurfaceVariant,"enabled-icon-color-toggle-unselected":r.OnSurfaceVariant,"enabled-icon-color-toggle-selected":r.InverseOnSurface,"disabled-outline-color":r.OutlineVariant,"disabled-outline-color-toggle-unselected":r.OutlineVariant,"disabled-outline-color-toggle-selected":`transparent`,"disabled-container-color":`transparent`,"disabled-container-color-toggle-unselected":`transparent`,"disabled-container-color-toggle-selected":r.OnSurface,"disabled-container-opacity":`0.1`,"disabled-container-opacity-toggle-unselected":`0.1`,"disabled-container-opacity-toggle-selected":`0.1`,"disabled-icon-color":r.OnSurface,"disabled-icon-opacity":`0.38`,"hovered-state-layer-color":r.OnSurfaceVariant,"hovered-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"hovered-state-layer-color-toggle-selected":r.InverseOnSurface,"hovered-state-layer-opacity":O.HoveredStateLayerOpacity,"hovered-icon-color":r.OnSurfaceVariant,"hovered-icon-color-toggle-unselected":r.OnSurfaceVariant,"hovered-icon-color-toggle-selected":r.InverseOnSurface,"focused-state-layer-color":r.OnSurfaceVariant,"focused-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"focused-state-layer-color-toggle-selected":r.InverseOnSurface,"focused-state-layer-opacity":O.FocusedStateLayerOpacity,"focused-icon-color":r.OnSurfaceVariant,"focused-icon-color-toggle-unselected":r.OnSurfaceVariant,"focused-icon-color-toggle-selected":r.InverseOnSurface,"pressed-state-layer-color":r.OnSurfaceVariant,"pressed-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"pressed-state-layer-color-toggle-selected":r.InverseOnSurface,"pressed-state-layer-opacity":O.PressedStateLayerOpacity,"pressed-icon-color":r.OnSurfaceVariant,"pressed-icon-color-toggle-unselected":r.OnSurfaceVariant,"pressed-icon-color-toggle-selected":r.InverseOnSurface}));var nr=H(q$1(W(W({},jn),Kn),{"enabled-icon-color":r.OnSurfaceVariant,"enabled-icon-color-toggle-unselected":r.OnSurfaceVariant,"enabled-icon-color-toggle-selected":r.Primary,"disabled-icon-color":r.OnSurface,"disabled-icon-opacity":`0.38`,"hovered-state-layer-color":r.OnSurfaceVariant,"hovered-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"hovered-state-layer-color-toggle-selected":r.Primary,"hovered-state-layer-opacity":O.HoveredStateLayerOpacity,"hovered-icon-color":r.OnSurfaceVariant,"hovered-icon-color-toggle-unselected":r.OnSurfaceVariant,"hovered-icon-color-toggle-selected":r.Primary,"focused-state-layer-color":r.OnSurfaceVariant,"focused-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"focused-state-layer-color-toggle-selected":r.Primary,"focused-state-layer-opacity":O.FocusedStateLayerOpacity,"focused-icon-color":r.OnSurfaceVariant,"focused-icon-color-toggle-unselected":r.OnSurfaceVariant,"focused-icon-color-toggle-selected":r.Primary,"pressed-state-layer-color":r.OnSurfaceVariant,"pressed-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"pressed-state-layer-color-toggle-selected":r.Primary,"pressed-state-layer-opacity":O.PressedStateLayerOpacity,"pressed-icon-color":r.OnSurfaceVariant,"pressed-icon-color-toggle-unselected":r.OnSurfaceVariant,"pressed-icon-color-toggle-selected":r.Primary}));var ir=H(q$1(W(W({},jn),Kn),{"enabled-container-color":r.Primary,"enabled-container-color-toggle-unselected":r.SurfaceContainer,"enabled-container-color-toggle-selected":r.Primary,"enabled-icon-color":r.OnPrimary,"enabled-icon-color-toggle-unselected":r.OnSurfaceVariant,"enabled-icon-color-toggle-selected":r.OnPrimary,"disabled-container-color":r.OnSurface,"disabled-container-opacity":`0.1`,"disabled-icon-color":r.OnSurface,"disabled-icon-opacity":`0.38`,"hovered-state-layer-color":r.OnPrimary,"hovered-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"hovered-state-layer-color-toggle-selected":r.OnPrimary,"hovered-state-layer-opacity":O.HoveredStateLayerOpacity,"hovered-icon-color":r.OnPrimary,"hovered-icon-color-toggle-unselected":r.OnSurfaceVariant,"hovered-icon-color-toggle-selected":r.OnPrimary,"focused-state-layer-color":r.OnPrimary,"focused-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"focused-state-layer-color-toggle-selected":r.OnPrimary,"focused-state-layer-opacity":O.FocusedStateLayerOpacity,"focused-icon-color":r.OnPrimary,"focused-icon-color-toggle-unselected":r.OnSurfaceVariant,"focused-icon-color-toggle-selected":r.OnPrimary,"pressed-state-layer-color":r.OnPrimary,"pressed-state-layer-color-toggle-unselected":r.OnSurfaceVariant,"pressed-state-layer-color-toggle-selected":r.OnPrimary,"pressed-state-layer-opacity":O.PressedStateLayerOpacity,"pressed-icon-color":r.OnPrimary,"pressed-icon-color-toggle-unselected":r.OnSurfaceVariant,"pressed-icon-color-toggle-selected":r.OnPrimary}));var rr=H(q$1(W(W({},jn),Kn),{"enabled-container-color":r.SecondaryContainer,"enabled-container-color-toggle-unselected":r.SecondaryContainer,"enabled-container-color-toggle-selected":r.Secondary,"enabled-icon-color":r.OnSecondaryContainer,"enabled-icon-color-toggle-unselected":r.OnSecondaryContainer,"enabled-icon-color-toggle-selected":r.OnSecondary,"disabled-container-color":r.OnSurface,"disabled-container-opacity":`0.1`,"disabled-icon-color":r.OnSurface,"disabled-icon-opacity":`0.38`,"hovered-state-layer-color":r.OnSecondaryContainer,"hovered-state-layer-color-toggle-unselected":r.OnSecondaryContainer,"hovered-state-layer-color-toggle-selected":r.OnSecondary,"hovered-state-layer-opacity":O.HoveredStateLayerOpacity,"hovered-icon-color":r.OnSecondaryContainer,"hovered-icon-color-toggle-unselected":r.OnSecondaryContainer,"hovered-icon-color-toggle-selected":r.OnSecondary,"focused-state-layer-color":r.OnSecondaryContainer,"focused-state-layer-color-toggle-unselected":r.OnSecondaryContainer,"focused-state-layer-color-toggle-selected":r.OnSecondary,"focused-state-layer-opacity":O.FocusedStateLayerOpacity,"focused-icon-color":r.OnSecondaryContainer,"focused-icon-color-toggle-unselected":r.OnSecondaryContainer,"focused-icon-color-toggle-selected":r.OnSecondary,"pressed-state-layer-color":r.OnSecondaryContainer,"pressed-state-layer-color-toggle-unselected":r.OnSecondaryContainer,"pressed-state-layer-color-toggle-selected":r.OnSecondary,"pressed-state-layer-opacity":O.PressedStateLayerOpacity,"pressed-icon-color":r.OnSecondaryContainer,"pressed-icon-color-toggle-unselected":r.OnSecondaryContainer,"pressed-icon-color-toggle-selected":r.OnSecondary}));var ml=Y(`--mdc-icon-button`)(ir);var gl=Y(`--mdc-icon-button`)(rr);var yl=Y(`--mdc-icon-button`)(tr);var bl=Y(`--mdc-icon-button`)(nr);var vl=()=>{let e=(n,i)=>M(`
        border-end-start-radius: min(var(--_${n}-${i}-end-start), calc(var(--_${n}-container-height) / 2));
        border-end-end-radius: min(var(--_${n}-${i}-end-end), calc(var(--_${n}-container-height) / 2));
        border-start-end-radius: min(var(--_${n}-${i}-start-end), calc(var(--_${n}-container-height) / 2));
        border-start-start-radius: min(var(--_${n}-${i}-start-start), calc(var(--_${n}-container-height) / 2));
    `),t=n=>k`
        &.extra-small {${e(`extra-small`,n)};}
        &.small {${e(`small`,n)};}
        &.medium {${e(`medium`,n)};}
        &.large {${e(`large`,n)};}
        &.extra-large {${e(`extra-large`,n)};}
    `;return k`
        .container.round {${t(`container-shape-round`)};}
        .container.square {${t(`container-shape-square`)};}
        .container.togglable.selected {
            &.round {${t(`container-shape-round-selected`)};}
            &.square {${t(`container-shape-square-selected`)};}
        }
        .container:not(.disable-morph, .togglable):is(.round, .square):active {${t(`container-shape-pressed-morph`)};}
        .container:not(.disable-morph).togglable:has(input:active) {${t(`container-shape-pressed-morph`)};}
    `};var Sl=()=>{let e=(t,n)=>q(`--mdc-ripple`)({"enabled-hovered-color":t?`var(--_hovered-state-layer-color-toggle-${n?`selected`:`unselected`})`:`var(--_hovered-state-layer-color)`,"enabled-focused-color":t?`var(--_focused-state-layer-color-toggle-${n?`selected`:`unselected`})`:`var(--_focused-state-layer-color)`,"enabled-pressed-color":t?`var(--_pressed-state-layer-color-toggle-${n?`selected`:`unselected`})`:`var(--_pressed-state-layer-color)`,"enabled-hovered-opacity":`var(--_hovered-state-layer-opacity)`,"enabled-focused-opacity":`var(--_focused-state-layer-opacity)`,"enabled-pressed-opacity":`var(--_pressed-state-layer-opacity)`})();return k`
        mdc-ripple { ${e(!1,!1)}; }
        .togglable.selected mdc-ripple { ${e(!0,!0)}; }
        .togglable.unselected mdc-ripple { ${e(!0,!1)}; }
    `};var xl=()=>{let e=(n,i)=>q(`--mdc-focus-ring`)({"shape-start-start":`min(var(--_${n}-${i}-start-start), calc(var(--_${n}-container-height) / 2))`,"shape-start-end":`min(var(--_${n}-${i}-start-end), calc(var(--_${n}-container-height) / 2))`,"shape-end-end":`min(var(--_${n}-${i}-end-end), calc(var(--_${n}-container-height) / 2))`,"shape-end-start":`min(var(--_${n}-${i}-end-start), calc(var(--_${n}-container-height) / 2))`})(),t=n=>M(`
        &.extra-small mdc-focus-ring {${e(`extra-small`,n)};}
        &.small mdc-focus-ring {${e(`small`,n)};}
        &.medium mdc-focus-ring {${e(`medium`,n)};}
        &.large mdc-focus-ring {${e(`large`,n)};}
        &.extra-large mdc-focus-ring {${e(`extra-large`,n)};}
    `);return k`
        .container.round {${t(`container-shape-round`)};}
        .container.square {${t(`container-shape-square`)};}
        .container.togglable.selected.round {${t(`container-shape-round-selected`)};}
        .container.togglable.selected.square {${t(`container-shape-square-selected`)};}
        .container:not(.disable-morph, .togglable):is(.round, .square):active,
        .container:not(.disable-morph).togglable:has(input:active) {${t(`container-shape-pressed-morph`)};}
    `};var wl=()=>{let e=()=>{let i=a=>M(`height: var(--_${a}-container-height)`);return k`
            .container {
                &.extra-small {${i(`extra-small`)};}
                &.small {${i(`small`)};}
                &.medium {${i(`medium`)};}
                &.large {${i(`large`)};}
                &.extra-large {${i(`extra-large`)};}
            }
        `},t=()=>{let i=(o,s)=>M(`padding-inline-start: var(--_${o}-${s}-leading-space);padding-inline-end: var(--_${o}-${s}-trailing-space)`),a=o=>M(`
            .container.${o} {
                &.extra-small {${i(`extra-small`,o)};}
                &.small {${i(`small`,o)};}
                &.medium {${i(`medium`,o)};}
                &.large {${i(`large`,o)};}
                &.extra-large {${i(`extra-large`,o)};}
            }
        `);return k`${a(`narrow`)}${a(`default`)}${a(`wide`)}`},n=()=>{let i=(o,s)=>M(`min-width: calc(var(--_${o}-${s}-leading-space) + var(--_${o}-${s}-trailing-space) + var(--_${o}-icon-size))`),a=o=>M(`
            .container.${o} {
                &.extra-small {${i(`extra-small`,o)};}
                &.small {${i(`small`,o)};}
                &.medium {${i(`medium`,o)};}
                &.large {${i(`large`,o)};}
                &.extra-large {${i(`extra-large`,o)};}
            }
        `);return k`${a(`narrow`)}${a(`default`)}${a(`wide`)}`};return k`${e()}${t()}${n()}`};var Cl=k`
    .container:is(.filled, .filled-tonal):not(.disabled) .background {
        background: var(--_enabled-container-color);
    }
    .container:is(.filled, .filled-tonal):not(.disabled).togglable.unselected .background {
        background: var(--_enabled-container-color-toggle-unselected);
    }
    .container:is(.filled, .filled-tonal):not(.disabled).togglable.selected .background {
        background: var(--_enabled-container-color-toggle-selected);
    }
    .container:is(.filled, .filled-tonal).disabled .background {
        background: var(--_disabled-container-color);
        opacity: var(--_disabled-container-opacity);
    }

    .container.outlined:not(.disabled) .background {
        background: var(--_enabled-container-color);
    }
    .container.outlined.togglable.unselected .background {
        background: var(--_enabled-container-color-toggle-unselected);
    }
    .container.outlined.togglable.selected .background {
        background: var(--_enabled-container-color-toggle-selected);
    }
    .container.outlined:not(.togglable).disabled .background {
        background: var(--_disabled-container-color);
    }
    .container.outlined.togglable.disabled {
        &.unselected .background {
            background: var(--_disabled-container-color-toggle-unselected);
        }
        &.selected .background {
            background: var(--_disabled-container-color-toggle-selected);
        }
    }
`;var El=k`
    .outline {
        all: unset;
        border-radius: inherit;
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        box-sizing: border-box;
        border-style: solid;
        background: transparent;
    }
    .container:not(.outlined) .outline {
        display: none;
    }

    .container.outlined.extra-small .outline {
        border-width: var(--_extra-small-outline-width);
    }
    .container.outlined.small .outline {
        border-width: var(--_small-outline-width);
    }
    .container.outlined.medium .outline {
        border-width: var(--_medium-outline-width);
    }
    .container.outlined.large .outline {
        border-width: var(--_large-outline-width);
    }
    .container.outlined.extra-large .outline {
        border-width: var(--_extra-large-outline-width);
    }

    .container.outlined:not(.disabled) .outline {
        border-color: var(--_enabled-outline-color);
    }
    .container.outlined:not(.disabled).togglable.unselected .outline {
        border-color: var(--_enabled-outline-color-toggle-unselected);
    }
    .container.outlined:not(.disabled).togglable.selected .outline {
        border-color: var(--_enabled-outline-color-toggle-selected);
    }

    .container.outlined.disabled .outline {
        outline-color: var(--_disabled-outline-color);
    }
    .container.outlined.disabled.togglable.unselected .outline {
        outline-color: var(--_disabled-outline-color-toggle-unselected);
    }
    .container.outlined.disabled.togglable.selected .outline {
        outline-color: var(--_disabled-outline-color-toggle-selected);
    }
`;var $l=k`
    :host {
        display: inline-flex;
        vertical-align: top;
        border: none;
        outline: none;
        justify-content: center;
        user-select: none;
    }

    :host([disabled]),
    :host([disabled]) button,
    :host([disabled]) input,
    .container.disabled,
    .container.disabled button,
    .container.disabled input {
        cursor: default;
        pointer-events: none;
    }

    ::slotted(*) {
        font-weight: inherit;
        fill: currentColor;
        user-select: none;
    }

    input {
        all: unset;
        appearance: none;
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        opacity: 0;
        outline: none;
        border: none;
        z-index: 1;
        cursor: inherit;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .container {
        padding: 0;
        margin: 0;
        cursor: pointer;
        position: relative;
        display: grid;
        place-content: center;
        flex-grow: 0;
        flex-shrink: 0;
        border: none;
        text-decoration: none;
        user-select: none;
        outline: none;
        appearance: none;
        background: transparent;
        user-select: none;
        z-index: 0;
    }

    .background {
        user-select: none;
        border-radius: inherit;
        height: 100%;
        width: 100%;
        z-index: -1;
        position: absolute;
        inset: 0px;
    }

    .container,
    mdc-focus-ring {
        /* Add border-radius so the focus ring morphs alongside the
           container; preserve opacity so the closing transition still runs. */
        transition-property: border-radius, opacity;
        transition-duration: 350ms;
        transition-timing-function: cubic-bezier(0.42, 1.67, 0.21, 0.9);
    }
`;var kl=k`
    .container:not(.disabled) {
        color: var(--_enabled-icon-color);
    }
    .container:not(.disabled).togglable.unselected {
        color: var(--_enabled-icon-color-toggle-unselected);
    }
    .container:not(.disabled).togglable.selected {
        color: var(--_enabled-icon-color-toggle-selected);
    }

    .container:not(.disabled):hover {
        color: var(--_hovered-icon-color);
    }
    .container:not(.disabled).togglable.unselected:hover {
        color: var(--_hovered-icon-color-toggle-unselected);
    }
    .container:not(.disabled).togglable.selected:hover {
        color: var(--_hovered-icon-color-toggle-selected);
    }

    .container:not(.disabled):focus-within {
        color: var(--_focused-icon-color);
    }
    .container:not(.disabled).togglable.unselected:focus-within {
        color: var(--_focused-icon-color-toggle-unselected);
    }
    .container:not(.disabled).togglable.selected:focus-within {
        color: var(--_focused-icon-color-toggle-selected);
    }

    .container:not(.disabled):active {
        color: var(--_pressed-icon-color);
    }
    .container:not(.disabled).togglable.unselected:active {
        color: var(--_pressed-icon-color-toggle-unselected);
    }
    .container:not(.disabled).togglable.selected:active {
        color: var(--_pressed-icon-color-toggle-selected);
    }

    .container.disabled {
        color: var(--_disabled-icon-color);
        opacity: var(--_disabled-icon-opacity);
    }
`;var _l=k`
    .container.extra-small ::slotted(*) {
        font-size: var(--_extra-small-icon-size);
        height: var(--_extra-small-icon-size);
        width: var(--_extra-small-icon-size);
    }
    .container.small ::slotted(*) {
        font-size: var(--_small-icon-size);
        height: var(--_small-icon-size);
        width: var(--_small-icon-size);
    }
    .container.medium ::slotted(*) {
        font-size: var(--_medium-icon-size);
        height: var(--_medium-icon-size);
        width: var(--_medium-icon-size);
    }
    .container.large ::slotted(*) {
        font-size: var(--_large-icon-size);
        height: var(--_large-icon-size);
        width: var(--_large-icon-size);
    }
    .container.extra-large ::slotted(*) {
        font-size: var(--_extra-large-icon-size);
        height: var(--_extra-large-icon-size);
        width: var(--_extra-large-icon-size);
    }

    .container.extra-small .icon {${q(`--mdc-icon`)({"enabled-size":`var(--_extra-small-icon-size)`})()};}
    .container.small .icon {${q(`--mdc-icon`)({"enabled-size":`var(--_small-icon-size)`})()};}
    .container.medium .icon {${q(`--mdc-icon`)({"enabled-size":`var(--_medium-icon-size)`})()};}
    .container.large .icon {${q(`--mdc-icon`)({"enabled-size":`var(--_large-icon-size)`})()};}
    .container.extra-large .icon {${q(`--mdc-icon`)({"enabled-size":`var(--_extra-large-icon-size)`})()};}
`;var Ol=k`
    .icon {
        grid-row: 1/2;
        grid-column: 1/2;
    }

    /* For Checkable IconButton */
    .icon:is(.active-icon, .inactive-icon, .default-icon) {
        display: none;
    }

    .container.togglable.selected.has-active-icon .icon.active-icon {
        display: flex;
    }
    .container.togglable.selected:not(.has-active-icon) .icon.default-icon {
        display: flex;
    }

    .container.togglable.unselected.has-inactive-icon .icon.inactive-icon {
        display: flex;
    }
    .container.togglable.unselected:not(.has-inactive-icon) .icon.default-icon {
        display: flex;
    }
`;var Pl=k`
    :host:has(.container.filled) {${ml};}
    :host:has(.container.filled-tonal) {${gl};}
    :host:has(.container.outlined) {${yl};}
    :host:has(.container.standard) {${bl};}
`;var Qa=[vl(),Sl(),xl(),wl(),Cl,El,$l,kl,_l,Ol,Pl];var Tl=new Set([`Tab`,` `,`Enter`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`]);var Dl=new Set([` `,`Enter`]);var Ll=[`pointerdown`,`mousedown`,`touchstart`];var Hn=!1;var eo=!1;function Al(){if(!eo){eo=!0,document.addEventListener(`keydown`,e=>{e.altKey||e.ctrlKey||e.metaKey||(Hn=!0)},!0);for(let e of Ll)document.addEventListener(e,()=>{Hn=!1},!0)}}var xe=class extends ye(wn,vn,kn,$n)(oe){static{this.styles=Qa}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}get focusRingControl(){return this}get rippleControl(){return this.buttonElement}constructor(){super(),this.variant=`standard`,this.size=`small`,this.width=`default`,this.shape=`round`,this.disableMorph=!1,this.handleVisualFocusIn=()=>{this.shouldShowKeyboardVisuals()&&this.queueKeyboardVisualSync(!1)},this.handleVisualFocusOut=()=>{queueMicrotask(()=>{this.matches(`:focus-within`)||this.clearKeyboardVisuals()})},this.handleVisualKeyDown=e=>{this.disabled||!Tl.has(e.key)||(Hn=!0,this.queueKeyboardVisualSync(Dl.has(e.key)))},this.addEventListener(`click`,this.handleClick.bind(this)),Al()}getRenderClasses(){return{container:!0,[this.variant]:!0,[this.size]:!0,[this.width]:!0,[this.shape]:!0,disabled:this.disabled,"disable-morph":this.disableMorph}}get focusRingHtmlFor(){return null}get rippleHtmlFor(){return`button`}render(){let{ariaHasPopup:e,ariaExpanded:t,ariaLabel:n}=this;return S`<button class="${ee(this.getRenderClasses())}" id="button" ?disabled="${this.disabled}" aria-disabled="${this.disabled}" aria-label="${n||_}" aria-haspopup="${e||_}" aria-expanded="${t||_}" @focusin="${this.handleVisualFocusIn}" @focusout="${this.handleVisualFocusOut}" @keydown="${this.handleVisualKeyDown}">${this.variant===`outlined`?this.renderOutline():_} ${this.renderIcon()} ${this.renderBackground()} ${this.renderTouchTarget()} ${this.renderRipple()} ${this.renderFocusRing()}</button>`}renderBackground(){return S`<span class="background" aria-hidden="true"></span>`}renderOutline(){return S`<span class="outline" aria-hidden="true"></span>`}renderIcon(){return S`<slot></slot>`}renderTouchTarget(){return S`<span class="touch-target" aria-hidden="true"></span>`}async handleClick(e){if(this.disabled){e.stopImmediatePropagation(),e.preventDefault();return}!En(e)||!this.buttonElement||(await 0,this.focus(),Cn(this.buttonElement))}shouldShowKeyboardVisuals(){return Hn||this.matches(`:focus-visible`)||(this.buttonElement?.matches(`:focus-visible`)??!1)}queueKeyboardVisualSync(e){queueMicrotask(()=>{!this.isConnected||this.disabled||!this.matches(`:focus-within`)||this.shouldShowKeyboardVisuals()&&(this.focusRingElement&&!this.focusRingElement.focused&&(this.focusRingElement.focused=!0),this.rippleElement&&!this.rippleElement.focused&&(this.rippleElement.focused=!0),e&&this.rippleElement&&!this.rippleElement.pressed&&this.rippleElement.action.handleClick())})}clearKeyboardVisuals(){this.focusRingElement?.focused&&this.focusRingElement.close(),this.rippleElement?.focused&&(this.rippleElement.focused=!1)}};h([b({type:String})],xe.prototype,`variant`,void 0);h([b({type:String})],xe.prototype,`size`,void 0);h([b({type:String})],xe.prototype,`width`,void 0);h([b({type:String})],xe.prototype,`shape`,void 0);h([b({type:Boolean,attribute:`disable-morph`})],xe.prototype,`disableMorph`,void 0);h([J(`#button`)],xe.prototype,`buttonElement`,void 0);var ar;var Ct=class extends xe{static{ar=this}constructor(...t){super(...t),this.type=`submit`,this.value=``,this.disabled=!1}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.formAssociated=!0}static{_n(ar)}get name(){return this.getAttribute(`name`)??``}set name(t){this.setAttribute(`name`,t)}get form(){return this[z].form}};h([b({type:String})],Ct.prototype,`type`,void 0);h([b({type:String,reflect:!0})],Ct.prototype,`value`,void 0);h([b({type:Boolean,reflect:!0})],Ct.prototype,`disabled`,void 0);Ct=ar=h([se(`mdc-icon-button`)],Ct);var we=class extends ye(Dn,Pn)(xe){static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}constructor(){super(),this.type=`checkbox`,this.checked=!1,this.value=`on`,this.required=!1,this.hasDefaultIcon=!1,this.hasActiveIcon=!1,this.hasInactiveIcon=!1,this.selectionController=new Rn(this,{multiple:this.type===`checkbox`,canCancel:this.type===`checkbox`,preventSelectionDuringInitialFocus:this.type===`checkbox`,preventSelectionDuringSwitching:this.type===`checkbox`,dispatchNavigationClick:this.type===`radio`,getFocusableElement:t=>t}),this.tabIndex=0,this[z].role=this.type}connectedCallback(){super.connectedCallback(),this.hasAttribute(`default-checked`)&&(this.checked=!0)}willUpdate(t){if(super.willUpdate(t),t.has(`type`)){let n=this.type===`checkbox`;this.selectionController.configure({multiple:n,canCancel:n,preventSelectionDuringInitialFocus:n,preventSelectionDuringSwitching:n,dispatchNavigationClick:!n}),this[z].role=this.type}t.has(`checked`)&&(this[z].ariaChecked=String(this.checked))}getRenderClasses(){return q$1(W({},super.getRenderClasses()),{togglable:!0,selected:this.checked,unselected:!this.checked,"has-default-icon":this.hasDefaultIcon&&!this.hasActiveIcon,"has-active-icon":this.hasActiveIcon,"has-inactive-icon":this.hasInactiveIcon})}render(){let{ariaHasPopup:t,ariaExpanded:n,ariaLabel:i}=this;return S`<button class="${ee(this.getRenderClasses())}" id="button" ?disabled="${this.disabled}" aria-disabled="${this.disabled}" aria-label="${i||_}" aria-haspopup="${t||_}" aria-expanded="${n||_}" @focusin="${this.handleVisualFocusIn}" @focusout="${this.handleVisualFocusOut}" @keydown="${this.handleVisualKeyDown}">${this.variant===`outlined`?this.renderOutline():_} ${this.renderIcon()} ${this.renderBackground()} ${this.renderTouchTarget()} ${this.renderRipple()} ${this.renderFocusRing()}</button>`}renderIcon(){return S`<span class="icon default-icon"><slot @slotchange="${this.handleDefaultIconSlotChange}"></slot></span><span class="icon active-icon"><slot @slotchange="${this.handleActiveIconSlotChange}" name="active-icon"></slot></span><span class="icon inactive-icon"><slot @slotchange="${this.handleInactiveIconSlotChange}" name="inactive-icon"></slot></span>`}renderTouchTarget(){return S`<input id="input-as-touch-target" class="touch-target" role="button" .checked="${this.checked}" ?required="${this.required}" ?disabled="${this.disabled}" aria-checked="${this.checked}" aria-required="${this.required}" aria-disabled="${this.disabled}" tabindex="-1">`}handleDefaultIconSlotChange(t){this.hasDefaultIcon=t.target.assignedElements().length>0}handleActiveIconSlotChange(t){this.hasActiveIcon=t.target.assignedElements().length>0}handleInactiveIconSlotChange(t){this.hasInactiveIcon=t.target.assignedElements().length>0}[Ye](){return this.checked?this.value:null}[mt](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute(`default-checked`)}formStateRestoreCallback(t){this.checked=t===`true`}[gt](){return this.type===`checkbox`?new An(()=>({checked:this.checked,required:this.required})):new Mn(()=>this.selectionController?this.selectionController.controls:[this])}[yt](){return this.buttonElement}};h([b({type:String,reflect:!0})],we.prototype,`type`,void 0);h([b({type:Boolean,reflect:!0})],we.prototype,`checked`,void 0);h([b({type:String})],we.prototype,`value`,void 0);h([b({type:Boolean,reflect:!0})],we.prototype,`required`,void 0);h([X()],we.prototype,`hasDefaultIcon`,void 0);h([X()],we.prototype,`hasActiveIcon`,void 0);h([X()],we.prototype,`hasInactiveIcon`,void 0);we=h([se(`mdc-toggle-icon-button`)],we);var to=Symbol(`attachableController`);var no=new MutationObserver(e=>{for(let t of e)t.target[to]?.hostConnected()});var io=class{get htmlFor(){return this.host.getAttribute(`for`)}set htmlFor(e){e===null?this.host.removeAttribute(`for`):this.host.setAttribute(`for`,e)}get control(){return this.host.hasAttribute(`for`)?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.currentControl=null,this.host=e,this.onControlChange=t,e.addController(this),e[to]=this,no?.observe(e,{attributeFilter:[`for`]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute(`for`))}detach(){this.setCurrentControl(null),this.host.setAttribute(`for`,``)}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}};var ie={Inactive:0,TouchDelay:1,Holding:2,WaitingForClick:3};var Oe={pressGrowMs:450,minimumPressMs:225,initialOriginScale:.2,padding:10,softEdgeMinimumSize:75,softEdgeContainerRadio:.35,animationFill:`forwards`,touchDelayMs:150};var Ml=[`click`,`contextmenu`,`pointercancel`,`pointerdown`,`pointerenter`,`pointerleave`,`pointerup`,`focus`,`blur`];var ro=class{constructor(e){this.state=ie.Inactive,this.startEvent=null,this.checkBoundsAfterContextMenu=!1,this.initialSize=0,this.rippleScale=``,this.rippleSize=``,this.growAnimation=null,this.handleEvent=async t=>{switch(t.type){case`click`:this.handleClick(t);break;case`contextmenu`:this.handleContextmenu();break;case`pointercancel`:this.handlePointercancel(t);break;case`pointerdown`:await this.handlePointerdown(t);break;case`pointerenter`:this.handlePointerenter(t);break;case`pointerleave`:this.handlePointerleave(t);break;case`pointerup`:this.handlePointerup(t);break;case`focus`:this.handleFocus();break;case`blur`:this.handleBlur()}},this.host=e}onControlChange(e,t){for(let n of Ml)e?.removeEventListener(n,this.handleEvent),t?.addEventListener(n,this.handleEvent)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.host.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.host.hovered=!1,this.state!==ie.Inactive&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===ie.Holding){this.state=ie.WaitingForClick;return}if(this.state===ie.TouchDelay){this.state=ie.WaitingForClick,this.startPressAnimation(this.startEvent||void 0);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.startEvent=e,!this.isTouch(e)){this.state=ie.WaitingForClick,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=ie.TouchDelay,await new Promise(t=>{setTimeout(t,Oe.touchDelayMs)}),this.state===ie.TouchDelay&&(this.state=ie.Holding,this.startPressAnimation(e)))}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleClick(e){if(this.host.disabled)return;if(this.state===ie.WaitingForClick){this.endPressAnimation();return}let t=!e||e.detail===0;this.state===ie.Inactive&&t&&(this.startPressAnimation(),this.endPressAnimation())}handleContextmenu(){this.host.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}handleFocus(){this.host.disabled||(this.host.focused=!0)}handleBlur(){this.host.disabled||(this.host.focused=!1,this.state!==ie.Inactive&&this.endPressAnimation())}startPressAnimation(e){this.host.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:t,endPoint:n}=this.getTranslationCoordinates(e),i=`${t.x}px, ${t.y}px`,a=`${n.x}px, ${n.y}px`;this.host!==null&&(this.growAnimation=this.host.pressStateLayerElement.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${a}) scale(${this.rippleScale})`]},{duration:Oe.pressGrowMs,easing:ai.Standard.ToCSSValue(),fill:Oe.animationFill}))}getTranslationCoordinates(e){if(this.host===null)return;let{height:t,width:n}=this.host.getBoundingClientRect(),i={x:(n-this.initialSize)/2,y:(t-this.initialSize)/2},a={x:n/2,y:t/2};return typeof PointerEvent<`u`&&e instanceof PointerEvent&&(a=this.getNormalizedPointerEventCoords(e)),a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2},{startPoint:a,endPoint:i}}getNormalizedPointerEventCoords(e){if(this.host===null)return;let{scrollX:t,scrollY:n}=window,{left:i,top:a}=this.host.getBoundingClientRect(),o=t+i,s=n+a,{pageX:l,pageY:d}=e;return{x:l-o,y:d-s}}async endPressAnimation(){this.startEvent=null,this.state=ie.Inactive;let e=this.growAnimation,t=1/0;if(typeof e?.currentTime==`number`?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to(`ms`).value),t>=Oe.minimumPressMs){this.host.pressed=!1;return}await new Promise(n=>{setTimeout(n,Oe.minimumPressMs-t)}),this.growAnimation===e&&(this.host.pressed=!1)}determineRippleSize(){if(this.host===null)return;let{height:e,width:t}=this.host.getBoundingClientRect(),n=Math.max(e,t),i=Math.max(Oe.softEdgeContainerRadio*n,Oe.softEdgeMinimumSize),a=Math.floor(n*Oe.initialOriginScale),o=Math.sqrt(t**2+e**2)+Oe.padding;this.initialSize=a,this.rippleScale=`${(o+i)/this.initialSize}`,this.rippleSize=`${this.initialSize}px`}inBounds({x:e,y:t}){if(this.host===null)return;let{top:n,left:i,bottom:a,right:o}=this.host.getBoundingClientRect();return e>=i&&e<=o&&t>=n&&t<=a}isTouch({pointerType:e}){return e===`touch`}shouldReactToEvent(e){if(this.host.disabled||!e.isPrimary||this.startEvent&&this.startEvent.pointerId!==e.pointerId)return!1;if(e.type===`pointerenter`||e.type===`pointerleave`)return!this.isTouch(e);if(e.type===`pointerup`||e.type===`pointercancel`)return!0;let t=e.buttons===1;return this.isTouch(e)||t}};var Fl=Y(`--mdc-ripple`)(Pi);var Rl=k`
    @layer mdc.ripple.component {
        :host {
            display: flex;
            margin: auto;
            pointer-events: none;
            border-radius: inherit;
            position: absolute;
            inset: 0;
            overflow: hidden;
            -webkit-tap-highlight-color: transparent;
        }

        .ripple {
            border-radius: inherit;
            position: absolute;
            inset: 0;
            overflow: hidden;
            -webkit-tap-highlight-color: transparent;
        }

        :host([disabled]),
        :host([disable-hover-state-layer]) .hover-state-layer,
        :host([disable-focus-state-layer]) .focus-state-layer,
        :host([disable-press-state-layer]) .press-state-layer {
            display: none;
        }

        :host,
        .hover-state-layer,
        .focus-state-layer,
        .press-state-layer {
            transition-behavior: allow-discrete;
            @starting-style {
                display: flex;
                opacity: 0;
            }
        }

        .hover-state-layer,
        .focus-state-layer,
        .press-state-layer {
            position: absolute;
            opacity: 0;
            border-radius: inherit;
            pointer-events: none;
            overflow: hidden;
            -webkit-tap-highlight-color: transparent;
            inset: 0;
        }

        .hover-state-layer {
            background-color: var(--_hovered-color);
            transition: opacity 200ms cubic-bezier(0.2, 0, 0, 1), background-color 200ms cubic-bezier(0.2, 0, 0, 1);
        }
        .focus-state-layer {
            background-color: var(--_focused-color);
            transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1), background-color 150ms cubic-bezier(0.2, 0, 0, 1);
        }
        .press-state-layer {
            background: radial-gradient(closest-side, var(--_pressed-color) max(calc(100% - 70px), 65%), transparent 100%);
            transform-origin: center center;
            transition: opacity 375ms cubic-bezier(0.2, 0, 0, 1);
        }

        :host([hovered]:not([disable-hover-state-layer])) .hover-state-layer {
            opacity: var(--_hovered-opacity);
            transition-duration: 75ms;
        }
        :host([focused]:not([disable-focus-state-layer])) .focus-state-layer {
            opacity: var(--_focused-opacity);
            transition-duration: 75ms;
        }
        :host([pressed]:not([disable-press-state-layer])) .press-state-layer {
            opacity: var(--_pressed-opacity);
            transition-duration: 105ms;
        }
    }

    @layer mdc.ripple.motion {
        @media (prefers-reduced-motion: reduce) {
            :host,
            :host * {
                animation: none;
                transition: none;
            }
        }
    }

    @layer mdc.ripple.transparency {
        @media (prefers-reduced-transparency: reduce) {
            :host * {
            :host([hovered]:not([disable-hover-state-layer])) .hover-state-layer {
                opacity: 0.2;
            }
            :host([focused]:not([disable-focus-state-layer])) .focus-state-layer {
                opacity: 0.22;
            }
            :host([pressed]:not([disable-press-state-layer])) .press-state-layer {
                opacity: 0.22;
            }
            }
        }
    }

    @layer mdc.ripple.hcm {
        @media (forced-colors: active) {
            :host,
            .ripple {
                display: none;
            }
        }
    }

    @layer mdc.ripple.contrast {
        @media (prefers-contrast: more) {
            :host([hovered]:not([disable-hover-state-layer])) .hover-state-layer {
                opacity: 0.1;
            }
            :host([focused]:not([disable-focus-state-layer])) .focus-state-layer {
                opacity: 0.12;
            }
            :host([pressed]:not([disable-press-state-layer])) .press-state-layer {
                opacity: 0.12;
            }
        }

        @media (prefers-contrast: less) {
            :host([hovered]:not([disable-hover-state-layer])) .hover-state-layer {
                opacity: 0.05;
            }
            :host([focused]:not([disable-focus-state-layer])) .focus-state-layer {
                opacity: 0.08;
            }
            :host([pressed]:not([disable-press-state-layer])) .press-state-layer {
                opacity: 0.08;
            }
        }
    }
`;var ao=[k`
        @layer mdc.icon {
            @layer variable, component, motion, hcm, contrast, transparency;
        }
        @layer mdc.ripple.variable{:host{${Fl};}}
    `,Rl];var ce=class extends oe{constructor(...t){super(...t),this._ignoreGlobalConfig=!1,this._hasLocalConfig=!1,this._disabled=!1,this._disableHoverStateLayer=!1,this._disableFocusStateLayer=!1,this._disablePressStateLayer=!1,this._configAttributeSyncSource=null,this._lastEffectiveDisabled=!1,this.globalMDCContextConsumer=new gn(this,{context:ft,subscribe:!0}),this.action=new ro(this),this.attachableController=new io(this,this.action.onControlChange.bind(this.action))}static{this.styles=ao}get ignoreGlobalConfig(){return this._ignoreGlobalConfig}set ignoreGlobalConfig(t){let n=this._ignoreGlobalConfig;n!==t&&(this._ignoreGlobalConfig=t,this._configAttributeSyncSource=`property`,this.toggleAttribute(`ignore-global-config`,t),this._configAttributeSyncSource=null,this.requestUpdate(`ignoreGlobalConfig`,n))}get disableHoverStateLayer(){return this.effectiveDisableHoverStateLayer}set disableHoverStateLayer(t){if(this._configAttributeSyncSource)return;let n=this._disableHoverStateLayer;this._disableHoverStateLayer=t,this._hasLocalConfig=!0,this._configAttributeSyncSource=`property`,this.toggleAttribute(`disable-hover-state-layer`,t),this._configAttributeSyncSource=null,this.requestUpdate(`disableHoverStateLayer`,n)}get disableFocusStateLayer(){return this.effectiveDisableFocusStateLayer}set disableFocusStateLayer(t){if(this._configAttributeSyncSource)return;let n=this._disableFocusStateLayer;this._disableFocusStateLayer=t,this._hasLocalConfig=!0,this._configAttributeSyncSource=`property`,this.toggleAttribute(`disable-focus-state-layer`,t),this._configAttributeSyncSource=null,this.requestUpdate(`disableFocusStateLayer`,n)}get disablePressStateLayer(){return this.effectiveDisablePressStateLayer}set disablePressStateLayer(t){if(this._configAttributeSyncSource)return;let n=this._disablePressStateLayer;this._disablePressStateLayer=t,this._hasLocalConfig=!0,this._configAttributeSyncSource=`property`,this.toggleAttribute(`disable-press-state-layer`,t),this._configAttributeSyncSource=null,this.requestUpdate(`disablePressStateLayer`,n)}get disabled(){return this.effectiveDisabled}set disabled(t){let n=this._disabled;this._configAttributeSyncSource||(this._disabled=t,this._hasLocalConfig=!0,this._configAttributeSyncSource=`property`,this.toggleAttribute(`disabled`,t),this._configAttributeSyncSource=null,this.requestUpdate(`disabled`,n))}get useLocalConfig(){return this._ignoreGlobalConfig||this._hasLocalConfig}get globalRippleConfig(){let t=this.globalMDCContextConsumer.value?.ripple;return{disabled:t?.disabled??!1,disableHoverStateLayer:t?.disableHoverStateLayer??!1,disableFocusStateLayer:t?.disableFocusStateLayer??!1,disablePressStateLayer:t?.disablePressStateLayer??!1}}get effectiveDisabled(){return this.useLocalConfig?this._disabled:this.globalRippleConfig.disabled}get effectiveDisableHoverStateLayer(){return this.useLocalConfig?this._disableHoverStateLayer:this.globalRippleConfig.disableHoverStateLayer}get effectiveDisableFocusStateLayer(){return this.useLocalConfig?this._disableFocusStateLayer:this.globalRippleConfig.disableFocusStateLayer}get effectiveDisablePressStateLayer(){return this.useLocalConfig?this._disablePressStateLayer:this.globalRippleConfig.disablePressStateLayer}syncConfigAttributes(){let t=(n,i)=>{this.hasAttribute(n)!==i&&(this._configAttributeSyncSource=`effective`,this.toggleAttribute(n,i),this._configAttributeSyncSource=null)};t(`disabled`,this.effectiveDisabled),t(`disable-hover-state-layer`,this.effectiveDisableHoverStateLayer),t(`disable-focus-state-layer`,this.effectiveDisableFocusStateLayer),t(`disable-press-state-layer`,this.effectiveDisablePressStateLayer)}render(){return S`<span aria-hidden="true" aria-disabled="${this.disabled}" class="ripple"><span class="hover-state-layer" aria-hidden="true"></span> <span class="focus-state-layer" aria-hidden="true"></span> <span class="press-state-layer" aria-hidden="true"></span></span>`}get hoverStateLayerElement(){return this._hoverStateLayerElement}get focusStateLayerElement(){return this._focusStateLayerElement}get pressStateLayerElement(){return this._pressStateLayerElement}get hovered(){return this.hasAttribute(`hovered`)}set hovered(t){this.toggleAttribute(`hovered`,t)}get focused(){return this.hasAttribute(`focused`)}set focused(t){this.toggleAttribute(`focused`,t)}get pressed(){return this.hasAttribute(`pressed`)}set pressed(t){this.toggleAttribute(`pressed`,t)}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}updated(t){super.updated(t),this.syncConfigAttributes();let n=this.effectiveDisabled;n!==this._lastEffectiveDisabled&&(n&&(this.hovered=!1,this.focused=!1,this.pressed=!1),this._lastEffectiveDisabled=n)}};h([J(`.ripple`)],ce.prototype,`rippleElement`,void 0);h([J(`.hover-state-layer`)],ce.prototype,`_hoverStateLayerElement`,void 0);h([J(`.focus-state-layer`)],ce.prototype,`_focusStateLayerElement`,void 0);h([J(`.press-state-layer`)],ce.prototype,`_pressStateLayerElement`,void 0);h([b({type:Boolean,attribute:`ignore-global-config`,reflect:!0,noAccessor:!0})],ce.prototype,`ignoreGlobalConfig`,null);h([b({type:Boolean,attribute:`disable-hover-state-layer`,reflect:!0,noAccessor:!0})],ce.prototype,`disableHoverStateLayer`,null);h([b({type:Boolean,attribute:`disable-focus-state-layer`,reflect:!0,noAccessor:!0})],ce.prototype,`disableFocusStateLayer`,null);h([b({type:Boolean,attribute:`disable-press-state-layer`,reflect:!0,noAccessor:!0})],ce.prototype,`disablePressStateLayer`,null);h([b({type:Boolean,attribute:`disabled`,reflect:!0,noAccessor:!0})],ce.prototype,`disabled`,null);ce=h([se(`mdc-ripple`)],ce);var A=class extends ye(yn)(oe){constructor(...e){super(...e),this.variant=`modal`,this.selection=`single`,this.displayMode=`calendar`,this.open=!1,this.quick=!1,this.headline=``,this.supportingText=`Select date`,this.confirmLabel=`OK`,this.dismissLabel=`Cancel`,this.clearLabel=`Clear`,this.value=null,this.rangeStart=null,this.rangeEnd=null,this.displayedMonth=null,this.min=null,this.max=null,this.disabled=!1,this.required=!1,this.name=``,this.firstDayOfWeek=0,this.showModeToggle=!0,this.noFocusTrap=!1,this.pendingValue=null,this.pendingStart=null,this.pendingEnd=null,this.pendingMonth=Date.UTC(new Date().getUTCFullYear(),new Date().getUTCMonth(),1),this.inputText=``,this.inputEndText=``,this.openSubMenu=null,this.formInternals=null,this.handleDockedOutside=t=>{!this.open||this.variant!==`docked`||t.composedPath().includes(this)||this.close(`dismissed`)},this.handleDockedKeydown=t=>{if(!(!this.open||this.variant!==`docked`)&&t.key===`Escape`){if(this.openSubMenu!==null){this.openSubMenu=null;return}this.close(`dismissed`)}}}static{this.formAssociated=!0}ensureFormInternals(){if(this.formInternals)return this.formInternals;try{this.formInternals=this.attachInternals()}catch{this.formInternals=null}return this.formInternals}getSubmitValue(){return this.selection===`range`?this.rangeStart!==null&&this.rangeEnd!==null?`${qn(this.rangeStart)},${qn(this.rangeEnd)}`:null:this.value!==null?qn(this.value):null}syncFormValue(){let e=this.ensureFormInternals();if(!e)return;let t=this.getSubmitValue();e.setFormValue(t),this.required&&(t===null||t===``)?e.setValidity({valueMissing:!0},`Please select a date`):e.setValidity({})}formResetCallback(){this.value=null,this.rangeStart=null,this.rangeEnd=null,this.pendingValue=null,this.pendingStart=null,this.pendingEnd=null,this.syncInputText(),this.syncFormValue()}formStateRestoreCallback(e){if(typeof e!=`string`||e===``){this.formResetCallback();return}try{let t=e.split(`,`);if(this.selection===`range`&&t.length===2&&t[0]!==void 0&&t[1]!==void 0){let n=Zt(t[0]),i=Zt(t[1]);if(n>i)return;this.rangeStart=n,this.rangeEnd=i,this.pendingStart=n,this.pendingEnd=i}else{let n=Zt(t[0]??``);this.value=n,this.pendingValue=n}this.syncInputText(),this.syncFormValue()}catch{return}}updated(e){super.updated(e),(e.has(`value`)||e.has(`rangeStart`)||e.has(`rangeEnd`)||e.has(`required`))&&this.syncFormValue()}getRenderClasses(){return{container:!0}}connectedCallback(){super.connectedCallback(),this.value!==null&&(this.pendingValue=this.value),this.rangeStart!==null&&(this.pendingStart=this.rangeStart),this.rangeEnd!==null&&(this.pendingEnd=this.rangeEnd);let e=this.value??this.rangeStart??Date.UTC(new Date().getUTCFullYear(),new Date().getUTCMonth(),1);this.pendingMonth=Date.UTC(R(e).year,R(e).month-1,1),this.displayedMonth!==null&&(this.pendingMonth=this.displayedMonth),this.syncInputText(),this.syncFormValue()}async show(){if(this.open||this.disabled)return;let e=new CustomEvent(`open`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(e),!e.defaultPrevented&&(this.open=!0,this.syncInputText(),await this.updateComplete,this.variant===`docked`?this.startDockedPositioning():this.dialog&&!this.dialog.open&&this.dialog.showModal(),this.dispatchEvent(new CustomEvent(`opened`,{bubbles:!0,composed:!0})))}async close(e){if(!this.open)return;let t=new CustomEvent(`close`,{cancelable:!0,bubbles:!0,composed:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.variant===`docked`?this.stopDockedPositioning():this.dialog?.open&&(e!==void 0&&(this.dialog.returnValue=e),this.dialog.close(e)),this.open=!1,await this.updateComplete,this.dispatchEvent(new CustomEvent(`closed`,{bubbles:!0,composed:!0})))}disconnectedCallback(){this.stopDockedPositioning(),super.disconnectedCallback()}startDockedPositioning(){if(!this.dockedField||!this.dockedMenu)return;this.stopDockedPositioning();let e=async()=>{if(!this.dockedField||!this.dockedMenu)return;let{x:t,y:n}=await Ya(this.dockedField,this.dockedMenu,{placement:`bottom-start`,middleware:[Ha(6),Ga(),Wa({padding:8})]});Object.assign(this.dockedMenu.style,{left:`${t}px`,top:`${n}px`})};this.dockedPositionCleanup=ja(this.dockedField,this.dockedMenu,()=>{e()}),document.addEventListener(`pointerdown`,this.handleDockedOutside,!0),document.addEventListener(`keydown`,this.handleDockedKeydown,!0)}stopDockedPositioning(){this.dockedPositionCleanup?.(),this.dockedPositionCleanup=void 0,document.removeEventListener(`pointerdown`,this.handleDockedOutside,!0),document.removeEventListener(`keydown`,this.handleDockedKeydown,!0)}async confirm(){if(this.disabled)throw new Error(`Date picker is disabled`);if(this.displayMode===`input`&&this.commitInputText(),this.selection===`range`){if(this.required&&(this.pendingStart===null||this.pendingEnd===null))throw new Error(`Range start and end are required`);this.rangeStart=this.pendingStart,this.rangeEnd=this.pendingEnd,this.dispatchEvent(new CustomEvent(`range-change`,{detail:{start:this.pendingStart,end:this.pendingEnd},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`confirm`,{detail:{value:null,start:this.pendingStart,end:this.pendingEnd},bubbles:!0,composed:!0}))}else{if(this.required&&this.pendingValue===null)throw new Error(`Date value is required`);this.value=this.pendingValue,this.dispatchEvent(new CustomEvent(`date-change`,{detail:{value:this.pendingValue},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`confirm`,{detail:{value:this.pendingValue,start:null,end:null},bubbles:!0,composed:!0}))}this.syncFormValue(),await this.close(`confirmed`)}isDayDisabled(e){return!!(this.disabled||this.min!==null&&e<this.min||this.max!==null&&e>this.max)}syncInputText(){this.inputText=this.pendingValue!==null?et(this.pendingValue):``,this.inputEndText=this.pendingEnd!==null?et(this.pendingEnd):``,this.selection===`range`&&this.pendingStart!==null&&(this.inputText=et(this.pendingStart))}commitInputText(){try{if(this.selection===`range`){let e=this.inputText.trim()===``?null:Un(this.inputText),t=this.inputEndText.trim()===``?null:Un(this.inputEndText);if(e!==null&&!Jt(e)(this.min,this.max))throw new Error(`Start date out of range`);if(t!==null&&!Jt(t)(this.min,this.max))throw new Error(`End date out of range`);if(e!==null&&t!==null&&e>t)throw new Error(`Start must be <= end`);this.pendingStart=e,this.pendingEnd=t}else{if(this.inputText.trim()===``){this.pendingValue=null;return}let e=Un(this.inputText);if(!Jt(e)(this.min,this.max))throw new Error(`Date out of range`);this.pendingValue=e}}catch(e){throw e instanceof Error?e:new Error(`Invalid date input`)}}handleDayClick(e){if(!this.isDayDisabled(e)){if(this.selection===`range`){this.pendingStart===null||this.pendingStart!==null&&this.pendingEnd!==null?(this.pendingStart=e,this.pendingEnd=null):e===this.pendingStart?this.pendingStart=null:e<this.pendingStart?(this.pendingEnd=this.pendingStart,this.pendingStart=e):this.pendingEnd=e,this.requestUpdate();return}this.pendingValue=e,this.dispatchEvent(new CustomEvent(`date-change`,{detail:{value:e},bubbles:!0,composed:!0})),this.requestUpdate()}}handlePrevMonth(){let e=R(this.pendingMonth);this.pendingMonth=ne({year:e.year,month:e.month,day:1})-864e5;let t=R(this.pendingMonth);this.pendingMonth=ne({year:t.year,month:t.month,day:1})}handleNextMonth(){let e=R(this.pendingMonth),t=e.month===12?1:e.month+1,n=e.month===12?e.year+1:e.year;this.pendingMonth=ne({year:n,month:t,day:1})}handleToggleMode(){this.displayMode===`calendar`?this.displayMode=`input`:this.displayMode===`input`?this.displayMode=`calendar`:this.displayMode=`calendar`,this.syncInputText()}handleShowYear(){this.displayMode=`year`,this.scrollSelectedIntoView()}scrollSelectedIntoView(){this.updateComplete.then(()=>{this.shadowRoot?.querySelector(`.menu-item.selected, .year.selected`)?.scrollIntoView({block:`center`})})}handleShowCalendar(){this.displayMode=`calendar`}handleClear(){this.disabled||(this.selection===`range`?(this.pendingStart=null,this.pendingEnd=null,this.dispatchEvent(new CustomEvent(`range-change`,{detail:{start:null,end:null},bubbles:!0,composed:!0}))):(this.pendingValue=null,this.dispatchEvent(new CustomEvent(`date-change`,{detail:{value:null},bubbles:!0,composed:!0}))),this.syncInputText(),this.requestUpdate())}handleDockedMonthClick(e){let t=R(this.pendingMonth);this.pendingMonth=wt(ne({year:t.year,month:e,day:1}))(this.min,this.max),this.openSubMenu=null}handleDockedYearClick(e){let t=R(this.pendingMonth);this.pendingMonth=wt(ne({year:e,month:t.month,day:1}))(this.min,this.max),this.openSubMenu=null}toggleSubMenu(e){this.openSubMenu=this.openSubMenu===e?null:e,this.openSubMenu!==null&&this.scrollSelectedIntoView()}handleYearClick(e){let t=R(this.pendingMonth),n=1;this.pendingMonth=wt(ne({year:e,month:t.month,day:n}))(this.min,this.max);let i=R(this.pendingMonth);i.year!==e&&(this.pendingMonth=ne({year:e,month:i.month,day:1})),this.displayMode=`calendar`}handleDismiss(){this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0,composed:!0})),this.close(`dismissed`)}handleTriggerClick(){this.disabled||(this.open?(this.openSubMenu=null,this.close(`dismissed`)):this.show())}renderFieldText(){return this.selection===`range`?this.pendingStart!==null&&this.pendingEnd!==null?`${et(this.pendingStart)} \u2013 ${et(this.pendingEnd)}`:this.supportingText:this.pendingValue!==null?et(this.pendingValue):this.supportingText}renderDocked(){return S`<div class="docked-wrap"><button class="docked-field" @click="${this.handleTriggerClick}" ?disabled="${this.disabled}" aria-haspopup="dialog" aria-expanded="${this.open?`true`:`false`}"><span class="field-notch">Date</span> <span class="field-value">${this.renderFieldText()}</span> <span class="field-trailing"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14zM7 10h5v5H7z"/></svg></span></button> <span class="field-supporting">MM/DD/YYYY</span></div><div class="docked-menu" ?hidden="${!this.open}"><div class="${ee(q$1(W({},this.getRenderClasses()),{docked:!0}))}" role="dialog" aria-label="${this.supportingText}">${this.renderElevation()} ${this.displayMode===`year`?this.renderYears():this.displayMode===`input`?this.renderInputs():this.renderCalendar(`docked`)} ${this.renderActions()}</div></div>`}handleDialogCancel(e){e.preventDefault(),this.handleDismiss()}renderHeadlineText(){if(this.headline!==``)return this.headline;if(this.selection===`range`){let t=n=>new Date(n).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,timeZone:`UTC`});return this.pendingStart!==null&&this.pendingEnd!==null?`${t(this.pendingStart)} \u2013 ${t(this.pendingEnd)}`:this.pendingStart!==null?`${t(this.pendingStart)} \u2013 \u2026`:R(this.pendingMonth).year.toString()}if(this.pendingValue!==null)return new Date(this.pendingValue).toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`,timeZone:`UTC`});let e=R(this.pendingMonth);return new Date(Date.UTC(e.year,e.month-1,1)).toLocaleDateString(`en-US`,{month:`long`,year:`numeric`,timeZone:`UTC`})}renderInputHeadlineText(){return this.headline!==``?this.headline:this.selection===`range`?`Enter dates`:`Enter date`}handleDialogKeydown(e){if(this.noFocusTrap||e.key!==`Tab`||!this.dialog)return;let t=Array.from(this.dialog.querySelectorAll(`mdc-button, mdc-icon-button, button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])`)).filter(o=>o.offsetParent!==null||o===this.dialog?.querySelector(`.grid`));if(t.length===0)return;let n=t[0],i=t[t.length-1];if(n===void 0||i===void 0)return;let a=this.shadowRoot?.activeElement;e.shiftKey&&(a===n||a===null)?(i.focus(),e.preventDefault()):!e.shiftKey&&a===i&&(n.focus(),e.preventDefault())}handleGridKeydown(e){let t=e.target?.closest?.(`[data-millis]`)?.getAttribute(`data-millis`);if(t==null)return;let n=Number(t);if(!Number.isInteger(n))return;let i=null;if(e.key===`ArrowLeft`)i=n-864e5;else if(e.key===`ArrowRight`)i=n+864e5;else if(e.key===`ArrowUp`)i=n-6048e5;else if(e.key===`ArrowDown`)i=n+6048e5;else if(e.key===`Home`)i=n-(new Date(n).getUTCDay()-this.firstDayOfWeek+7)%7*864e5;else if(e.key===`End`)i=n+(6-(new Date(n).getUTCDay()-this.firstDayOfWeek+7)%7)*864e5;else if(e.key===`PageUp`)i=this.pendingMonth;else if(e.key===`PageDown`)i=this.pendingMonth;else if(e.key===`Enter`||e.key===` `){this.handleDayClick(n),e.preventDefault();return}else return;if(e.key===`PageUp`||e.key===`PageDown`){e.key===`PageUp`?this.handlePrevMonth():this.handleNextMonth(),e.preventDefault(),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(`.day:not([disabled])`)?.focus()});return}i===null||!Jt(i)(this.min,this.max)||(e.preventDefault(),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(`[data-millis="${i}"]`)?.focus()}))}shortMonthName(e){let t=R(e);return new Date(Date.UTC(t.year,t.month-1,1)).toLocaleDateString(`en-US`,{month:`short`,timeZone:`UTC`})}longMonthName(e){let t=R(e);return new Date(Date.UTC(t.year,t.month-1,1)).toLocaleDateString(`en-US`,{month:`long`,year:`numeric`,timeZone:`UTC`})}renderModalNav(){return S`<div class="nav-row"><mdc-button class="menu-button" variant="text" trailing-icon @click="${this.handleShowYear}" aria-label="Select year" aria-haspopup="listbox"><span>${this.longMonthName(this.pendingMonth)}</span> <svg slot="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg></mdc-button><div class="nav-buttons"><mdc-icon-button variant="standard" @click="${this.handlePrevMonth}" aria-label="Previous month"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></mdc-icon-button><mdc-icon-button variant="standard" @click="${this.handleNextMonth}" aria-label="Next month"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg></mdc-icon-button></div></div>`}renderDockedNav(){let e=R(this.pendingMonth),t=new Date().getUTCFullYear(),n=this.min!==null?R(this.min).year:t-100,i=this.max!==null?R(this.max).year:t+100,a=[];for(let u=1;u<=12;u++)a.push(new Date(Date.UTC(2026,u-1,1)).toLocaleDateString(`en-US`,{month:`long`,timeZone:`UTC`}));let o=er(n)(i),s=this.openSubMenu!==null,l=this.openSubMenu===`month`,d=this.openSubMenu===`year`,f=l||!s?S`<mdc-button class="menu-button" variant="text" trailing-icon @click="${()=>this.toggleSubMenu(`month`)}" aria-label="Select month" aria-haspopup="listbox" aria-expanded="${l?`true`:`false`}"><span>${this.shortMonthName(this.pendingMonth)}</span> <svg slot="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg></mdc-button>`:S`<span class="menu-group-label">${this.shortMonthName(this.pendingMonth)}</span>`,p=d||!s?S`<mdc-button class="menu-button" variant="text" trailing-icon @click="${()=>this.toggleSubMenu(`year`)}" aria-label="Select year" aria-haspopup="listbox" aria-expanded="${d?`true`:`false`}"><span>${e.year}</span> <svg slot="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg></mdc-button>`:S`<span class="menu-group-label">${e.year}</span>`;return S`<div class="nav-row docked-nav"><div class="menu-group">${s?_:S`<mdc-icon-button variant="standard" @click="${this.handlePrevMonth}" aria-label="Previous month"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></mdc-icon-button>`} ${f} ${s?_:S`<mdc-icon-button variant="standard" @click="${this.handleNextMonth}" aria-label="Next month"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg></mdc-icon-button>`}</div><div class="menu-group">${s?_:S`<mdc-icon-button variant="standard" @click="${this.handlePrevYear}" aria-label="Previous year"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></mdc-icon-button>`} ${p} ${s?_:S`<mdc-icon-button variant="standard" @click="${this.handleNextYear}" aria-label="Next year"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg></mdc-icon-button>`}</div>${s?S`<div class="menu" role="listbox" aria-label="${l?`Select month`:`Select year`}">${l?a.map((u,m)=>{let v=e.month===m+1;return S`<button class="${ee({"menu-item":!0,selected:v})}" @click="${()=>this.handleDockedMonthClick(m+1)}" role="option" aria-selected="${v?`true`:`false`}"><mdc-ripple></mdc-ripple><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <span>${u}</span></button>`}):o.map(u=>{let m=e.year===u;return S`<button class="${ee({"menu-item":!0,selected:m})}" @click="${()=>this.handleDockedYearClick(u)}" role="option" aria-selected="${m?`true`:`false`}"><mdc-ripple></mdc-ripple><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <span>${u}</span></button>`})}</div>`:_}</div>`}handlePrevYear(){let e=R(this.pendingMonth);this.pendingMonth=wt(ne({year:e.year-1,month:e.month,day:1}))(this.min,this.max)}handleNextYear(){let e=R(this.pendingMonth);this.pendingMonth=wt(ne({year:e.year+1,month:e.month,day:1}))(this.min,this.max)}renderWeekdays(){let e=[],t=Date.UTC(2026,0,4);for(let n=0;n<7;n++){let i=new Date(t+(this.firstDayOfWeek+n)%7*864e5);e.push(i.toLocaleDateString(`en-US`,{weekday:`narrow`,timeZone:`UTC`}))}return S`<div class="weekdays" role="row">${e.map(n=>S`<span class="weekday" role="columnheader">${n}</span>`)}</div>`}renderDayGrid(e){let t=Xa(e)(this.firstDayOfWeek)(i=>this.isDayDisabled(i));return S`<div class="grid" role="grid" aria-label="${this.longMonthName(e)}" @keydown="${this.handleGridKeydown}">${t.map(i=>i.map(a=>{let o=R(a.millis),s=(new Date(a.millis).getUTCDay()-this.firstDayOfWeek+7)%7,l=this.selection===`single`?this.pendingValue===a.millis:a.millis===this.pendingStart||a.millis===this.pendingEnd,d=this.selection===`range`&&this.pendingStart!==null&&this.pendingEnd!==null&&a.millis>this.pendingStart&&a.millis<this.pendingEnd,f=this.selection===`range`&&a.millis===this.pendingStart,p=this.selection===`range`&&a.millis===this.pendingEnd,u=this.selection===`range`&&this.pendingStart!==null&&this.pendingEnd===null,m=Date.UTC(new Date().getUTCFullYear(),new Date().getUTCMonth(),new Date().getUTCDate());return S`<button class="${ee({day:!0,outside:!a.inMonth,selected:l,today:a.millis===m,"in-range":d,"range-start":f,"range-end":p,"range-pending":u,"col-first":s===0,"col-last":s===6})}" data-millis="${a.millis}" ?disabled="${a.disabled}" @click="${()=>this.handleDayClick(a.millis)}" role="gridcell" aria-selected="${l?`true`:`false`}" aria-label="${`${o.month}/${o.day}/${o.year}`}" tabindex="${l||a.millis===m?`0`:`-1`}"><mdc-ripple></mdc-ripple><span class="day-inner">${o.day}</span></button>`}))}</div>`}renderCalendar(e=`modal`){return S`${e===`docked`?this.renderDockedNav():this.renderModalNav()} ${this.renderWeekdays()} ${this.renderDayGrid(this.pendingMonth)}`}renderStackedMonths(e=6){let t=[];for(let n=0;n<e;n++)t.push(Za(this.pendingMonth)(n));return S`${t.map(n=>S`<p class="stack-month-label">${this.longMonthName(n)}</p>${this.renderDayGrid(n)}`)}`}renderYears(){let e=new Date().getUTCFullYear(),t=this.min!==null?R(this.min).year:e-100,n=this.max!==null?R(this.max).year:e+100,i=er(t)(n);return S`<div class="nav-row"><mdc-button class="menu-button" variant="text" trailing-icon @click="${this.handleShowCalendar}" aria-label="Back to calendar"><span>${this.longMonthName(this.pendingMonth)}</span> <svg slot="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14l5-5 5 5z"/></svg></mdc-button></div><div class="years" role="listbox" aria-label="Select year">${i.map(a=>{let o=R(this.pendingMonth).year===a;return S`<button class="${ee({year:!0,selected:o,today:a===e})}" @click="${()=>this.handleYearClick(a)}" role="option" aria-selected="${o?`true`:`false`}"><mdc-ripple></mdc-ripple><span class="year-inner">${a}</span></button>`})}</div>`}renderInputField(e,t){return S`<label class="input-field"><span class="input-label">${e}</span> <input .value="${t===`start`?this.inputText:this.inputEndText}" @input="${i=>{t===`start`?this.inputText=i.target.value:this.inputEndText=i.target.value}}" placeholder="mm/dd/yyyy" aria-label="${e}" inputmode="numeric"></label>`}renderInputs(){return this.selection===`range`?S`<div class="input-row">${this.renderInputField(`Date`,`start`)} ${this.renderInputField(`End date`,`end`)}</div>`:S`<div class="input-row">${this.renderInputField(`Date`,`start`)}</div>`}shouldShowClear(){return this.variant!==`docked`&&this.displayMode!==`input`}renderActions(){let e=S`<span class="actions-end"><mdc-button variant="text" @click="${this.handleDismiss}"><span>${this.dismissLabel}</span></mdc-button><mdc-button variant="text" @click="${()=>{this.confirm()}}"><span>${this.confirmLabel}</span></mdc-button></span>`;return this.shouldShowClear()?S`<div class="actions actions-split"><mdc-button variant="text" @click="${this.handleClear}"><span>${this.clearLabel}</span></mdc-button>${e}</div>`:S`<div class="actions">${e}</div>`}renderDialogBody(){return this.displayMode===`year`?this.renderYears():this.displayMode===`input`?this.renderInputs():this.renderCalendar(`modal`)}renderFullscreen(e){return S`<span aria-hidden="true" class="scrim"></span><dialog class="fullscreen" @cancel="${this.handleDialogCancel}" @keydown="${this.handleDialogKeydown}" aria-label="${this.supportingText}"><div class="${ee(q$1(W({},this.getRenderClasses()),{fullscreen:!0}))}">${this.renderElevation()}<div class="top-bar"><mdc-icon-button variant="standard" @click="${this.handleDismiss}" aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></mdc-icon-button><mdc-button variant="text" @click="${()=>{this.confirm()}}"><span>${this.confirmLabel===`OK`?`Save`:this.confirmLabel}</span></mdc-button></div><div class="header header-center"><p class="supporting-text">${this.supportingText}</p><h2 class="headline"><span>${e}</span> ${this.showModeToggle&&this.displayMode!==`input`?S`<mdc-icon-button variant="standard" @click="${this.handleToggleMode}" aria-label="Switch to input"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"/></svg></mdc-icon-button>`:_}</h2></div><div class="divider" role="separator"></div><div class="months">${this.displayMode===`input`?this.renderInputs():S`${this.renderWeekdays()} ${this.renderStackedMonths()}`}</div><div class="divider" role="separator"></div>${this.renderActions()}</div></dialog>`}render(){if(this.variant===`docked`)return this.renderDocked();let e=this.displayMode===`input`?this.renderInputHeadlineText():this.renderHeadlineText();return this.variant===`fullscreen`?this.renderFullscreen(e):S`<span aria-hidden="true" class="scrim"></span><dialog @cancel="${this.handleDialogCancel}" @keydown="${this.handleDialogKeydown}" aria-label="${this.supportingText}"><div class="${ee(this.getRenderClasses())}">${this.renderElevation()}<div class="header"><p class="supporting-text">${this.supportingText}</p><h2 class="headline"><span>${e}</span> ${this.showModeToggle?S`<mdc-icon-button variant="standard" @click="${this.handleToggleMode}" aria-label="${this.displayMode===`input`?`Switch to calendar`:`Switch to input`}">${this.displayMode===`input`?S`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14z"/></svg>`:S`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"/></svg>`}</mdc-icon-button>`:_}</h2></div><div class="divider" role="separator"></div>${this.renderDialogBody()} ${this.renderActions()}</div></dialog>`}};h([b({type:String,reflect:!0})],A.prototype,`variant`,void 0);h([b({type:String,reflect:!0})],A.prototype,`selection`,void 0);h([b({type:String,reflect:!0,attribute:`display-mode`})],A.prototype,`displayMode`,void 0);h([b({type:Boolean,reflect:!0})],A.prototype,`open`,void 0);h([b({type:Boolean})],A.prototype,`quick`,void 0);h([b({type:String})],A.prototype,`headline`,void 0);h([b({type:String,attribute:`supporting-text`})],A.prototype,`supportingText`,void 0);h([b({type:String,attribute:`confirm-label`})],A.prototype,`confirmLabel`,void 0);h([b({type:String,attribute:`dismiss-label`})],A.prototype,`dismissLabel`,void 0);h([b({type:String,attribute:`clear-label`})],A.prototype,`clearLabel`,void 0);h([b({type:Number})],A.prototype,`value`,void 0);h([b({type:Number,attribute:`range-start`})],A.prototype,`rangeStart`,void 0);h([b({type:Number,attribute:`range-end`})],A.prototype,`rangeEnd`,void 0);h([b({type:Number,attribute:`displayed-month`})],A.prototype,`displayedMonth`,void 0);h([b({type:Number})],A.prototype,`min`,void 0);h([b({type:Number})],A.prototype,`max`,void 0);h([b({type:Boolean,reflect:!0})],A.prototype,`disabled`,void 0);h([b({type:Boolean,reflect:!0})],A.prototype,`required`,void 0);h([b({type:String,reflect:!0})],A.prototype,`name`,void 0);h([b({type:Number,attribute:`first-day-of-week`})],A.prototype,`firstDayOfWeek`,void 0);h([b({type:Boolean,attribute:`show-mode-toggle`})],A.prototype,`showModeToggle`,void 0);h([b({type:Boolean,attribute:`no-focus-trap`,reflect:!0})],A.prototype,`noFocusTrap`,void 0);h([X()],A.prototype,`pendingValue`,void 0);h([X()],A.prototype,`pendingStart`,void 0);h([X()],A.prototype,`pendingEnd`,void 0);h([X()],A.prototype,`pendingMonth`,void 0);h([X()],A.prototype,`inputText`,void 0);h([X()],A.prototype,`inputEndText`,void 0);h([X()],A.prototype,`openSubMenu`,void 0);h([J(`dialog`)],A.prototype,`dialog`,void 0);h([J(`.docked-field`)],A.prototype,`dockedField`,void 0);h([J(`.docked-menu`)],A.prototype,`dockedMenu`,void 0);var or=class extends A{static{this.styles=la}};or=h([se(`mdc-date-picker`)],or);var zl=[`picker`];function Wn(e){if(e===``)return null;let t=Date.parse(`${e}T00:00:00Z`);return Number.isNaN(t)?null:t}function Vl(e){if(e===null)return``;let t=new Date(e),n=`${t.getUTCMonth()+1}`.padStart(2,`0`),i=`${t.getUTCDate()}`.padStart(2,`0`);return`${t.getUTCFullYear()}-${n}-${i}`}function Il(e){let t=Wn(e);if(t===null)return``;let n=new Date(t);return`${`${n.getUTCMonth()+1}`.padStart(2,`0`)}/${`${n.getUTCDate()}`.padStart(2,`0`)}/${n.getUTCFullYear()}`}var oo=(()=>{class e{pickerRef=PF(`picker`);selected=LF(``);min=kF(``);max=kF(``);disabled=kF(!1);value=Kw(()=>Wn(this.selected()));minDate=Kw(()=>Wn(this.min()));maxDate=Kw(()=>Wn(this.max()));hasSelection=Kw(()=>this.selected()!==``);fieldText=Kw(()=>Il(this.selected())||`Select date`);constructor(){hd(()=>{let n=this.value(),i=this.pickerRef()?.nativeElement;!i||i.value===n||i.formStateRestoreCallback(this.selected())})}open(){this.pickerRef()?.nativeElement.show()}selectDate(n){let i=n.detail;this.selected.set(Vl(i.value))}static ɵfac=function(i){return new(i||e)};static ɵcmp=kD({type:e,selectors:[[`app-calendar`]],viewQuery:function(i,a){i&1&&lg(a.pickerRef,zl,5),i&2&&rw()},inputs:{selected:[1,`selected`],min:[1,`min`],max:[1,`max`],disabled:[1,`disabled`]},outputs:{selected:`selectedChange`},decls:13,vars:7,consts:[[`picker`,``],[1,`picker`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`field`,3,`click`,`disabled`],[1,`notch`],[1,`value`],[1,`trailing`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14zM7 10h5v5H7z`],[1,`supporting`],[`variant`,`modal`,`selection`,`single`,`display-mode`,`calendar`,`supporting-text`,`Select date`,3,`date-change`,`min`,`max`,`disabled`]],template:function(i,a){i&1&&(il$1(0,`div`,1)(1,`button`,2),sg(`click`,function(){return a.open()}),il$1(2,`span`,3),_w(3,`Date`),sl$1(),il$1(4,`span`,4),_w(5),sl$1(),il$1(6,`span`,5),nd(),il$1(7,`svg`,6),eg(8,`path`,7),sl$1()()(),rd(),il$1(9,`span`,8),_w(10,`MM/DD/YYYY`),sl$1()(),il$1(11,`mdc-date-picker`,9,0),sg(`date-change`,function(s){return a.selectDate(s)}),sl$1()),i&2&&(GE(),rg(`disabled`,a.disabled()),GE(3),pg(`placeholder`,!a.hasSelection()),GE(),Dg(a.fieldText()),GE(6),rg(`min`,a.minDate())(`max`,a.maxDate())(`disabled`,a.disabled()))},styles:[`[_nghost-%COMP%]{display:block}.picker[_ngcontent-%COMP%]{display:flex;flex-direction:column}.field[_ngcontent-%COMP%]{align-items:center;background:transparent;border:1px solid var(--%NS%md-sys-color-outline);border-radius:var(--%NS%md-sys-shape-corner-extra-small, 4px);box-sizing:border-box;color:var(--%NS%md-sys-color-on-surface);cursor:pointer;display:flex;font-family:inherit;font-size:16px;gap:8px;height:56px;justify-content:space-between;min-width:240px;padding-inline:16px 8px;position:relative;text-align:start;width:100%}.field[_ngcontent-%COMP%]:disabled{cursor:default;opacity:.38}.field[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%md-sys-color-primary);outline-offset:2px}.notch[_ngcontent-%COMP%]{background:var(--%NS%md-sys-color-surface-container-low);color:var(--%NS%md-sys-color-on-surface-variant);font-size:12px;left:12px;line-height:16px;padding-inline:4px;position:absolute;top:-8px}.value[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.value.placeholder[_ngcontent-%COMP%]{color:var(--%NS%md-sys-color-on-surface-variant)}.trailing[_ngcontent-%COMP%]{align-items:center;background:var(--%NS%md-sys-color-surface-container-high);border-radius:8px;display:inline-flex;flex-shrink:0;justify-content:center;padding:8px}.trailing[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:currentColor;height:24px;width:24px}.supporting[_ngcontent-%COMP%]{color:var(--%NS%md-sys-color-on-surface-variant);font-size:12px;line-height:16px;padding-block-start:4px;padding-inline-start:16px}`]})}return e})();var Bl=[`*`];var so=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵcmp=kD({type:e,selectors:[[`app-card`]],ngContentSelectors:Bl,decls:2,vars:0,consts:[[1,`rounded-large`,`border`,`border-outline-variant`,`bg-surface-container-low`,`p-[16px]`]],template:function(i,a){i&1&&(ew(),il$1(0,`div`,0),tw(1),sl$1())},encapsulation:2})}return e})();var Nl=[`*`];function ql(e,t){if(e&1&&eg(0,`span`,3),e&2){let n=t.$index,i=JT();pg(`filled`,n<=i.selectedIndex())}}var Yn=(()=>{class e{steps=FF(Xt);selectedIndex=Zo$1(0);next(){this.selectedIndex.update(n=>n<this.steps().length-1?n+1:n)}previous(){this.selectedIndex.update(n=>n>0?n-1:n)}select(n){this.selectedIndex.set(n)}static ɵfac=function(i){return new(i||e)};static ɵcmp=kD({type:e,selectors:[[`app-stepper`]],contentQueries:function(i,a,o){i&1&&cg(o,a.steps,Xt,4),i&2&&rw()},ngContentSelectors:Nl,decls:5,vars:3,consts:[[`role`,`progressbar`,`aria-label`,`Setup progress`,`aria-valuemin`,`1`,1,`progress`],[1,`segment`,3,`filled`],[1,`stage`],[1,`segment`]],template:function(i,a){i&1&&(ew(),il$1(0,`div`,0),PT(1,ql,1,2,`span`,1,LT),sl$1(),il$1(3,`div`,2),tw(4),sl$1()),i&2&&(Kh(`aria-valuemax`,a.steps().length)(`aria-valuenow`,a.selectedIndex()+1)(`aria-valuetext`,`Step `+(a.selectedIndex()+1)+` of `+a.steps().length),GE(),FT(a.steps()))},styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column}.progress[_ngcontent-%COMP%]{display:flex;gap:8px}.segment[_ngcontent-%COMP%]{background:var(--%NS%md-sys-color-surface-container-highest);border-radius:999px;flex:1;height:4px;transition:background-color .32s cubic-bezier(.2,0,0,1)}.segment.filled[_ngcontent-%COMP%]{background:var(--%NS%md-sys-color-primary)}.stage[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:40px;min-height:300px}@media(prefers-reduced-motion:reduce){.segment[_ngcontent-%COMP%]{transition:none}}`]})}return e})();var Ul=[`*`];function Kl(e,t){if(e&1&&(il$1(0,`div`,0),tw(1),sl$1()),e&2){let n=JT();Kh(`aria-label`,n.label())}}var Xt=(()=>{class e{stepper=y(Yn);label=kF.required();index=Kw(()=>this.stepper.steps().indexOf(this));isActive=Kw(()=>this.index()===this.stepper.selectedIndex());static ɵfac=function(i){return new(i||e)};static ɵcmp=kD({type:e,selectors:[[`app-step`]],inputs:{label:[1,`label`]},ngContentSelectors:Ul,decls:1,vars:1,consts:[[`role`,`group`,1,`step`]],template:function(i,a){i&1&&(ew(),OT(0,Kl,2,1,`div`,0)),i&2&&kT(a.isActive()?0:-1)},styles:[`[_nghost-%COMP%]{display:contents}.step[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_step-enter .28s cubic-bezier(.2,0,0,1) both;display:flex;flex:1;flex-direction:column}@keyframes _ngcontent-%COMP%_step-enter{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.step[_ngcontent-%COMP%]{animation:none}}`]})}return e})();var Hl=(e,t)=>t.code;var Wl=(e,t)=>t.kind;function Gl(e,t){if(e&1&&(xi$1(0,`option`,18),_w(1),ol$1()),e&2){let n=t.$implicit;Jh(`value`,n.code),GE(),Tg(``,n.name,` · `,n.lifeExpectancy)}}function Yl(e,t){if(e&1&&(xi$1(0,`span`,22),_w(1),ol$1()),e&2){let n=t.$implicit;GE(),Dg(n.message)}}var Vb=(()=>{class e{myLifeService=y(N);router=y(we$1);seo=y(y$1);constructor(){this.seo.apply({title:`Set up your report — Day of My Life`,robots:`noindex,follow`})}birthday=LF(``);countries=a;worldAverage=73.4;lifespanModel=Zo$1({lifespanYears:80,countryCode:``});lifespanForm=Cr(this.lifespanModel,n=>{Ui$1(n.lifespanYears,1,{message:`Life expectancy must be at least 1 year.`}),Bi$1(n.lifespanYears,130,{message:`Life expectancy must be at most 130 years.`})});canFinish=Kw(()=>this.birthday()!==``&&this.lifespanForm().valid());onCountryChange(n$1){let i=n(n$1);this.lifespanModel.update(a=>q$1(W({},a),{countryCode:n$1,lifespanYears:i?i.lifeExpectancy:a.lifespanYears}))}done(){this.canFinish()&&(this.myLifeService.update({birthday:this.birthday(),lifespanYears:this.lifespanModel().lifespanYears,countryCode:this.lifespanModel().countryCode}),this.router.navigateByUrl(`report`))}static ɵfac=function(i){return new(i||e)};static ɵcmp=kD({type:e,selectors:[[`page-setup`]],inputs:{birthday:[1,`birthday`]},outputs:{birthday:`birthdayChange`},decls:53,vars:6,consts:[[`stepper`,``],[1,`flow`],[1,`wordmark`],[`label`,`Welcome`],[1,`step-body`],[1,`question`],[1,`supporting`],[1,`actions`],[3,`click`],[`label`,`Birthday`],[1,`control`],[3,`selectedChange`,`selected`],[`variant`,`text`,3,`click`],[3,`click`,`disabled`],[`label`,`Lifespan`],[`for`,`welcome-country`,1,`field-label`],[`id`,`welcome-country`,3,`change`,`formField`],[`value`,``],[3,`value`],[`for`,`welcome-lifespan`,1,`field-label`],[`id`,`welcome-lifespan`,`type`,`number`,3,`formField`],[1,`hint`],[1,`error`]],template:function(i,a){if(i&1){let o=WT();xi$1(0,`div`,1)(1,`span`,2),_w(2,`Day of my life`),ol$1(),xi$1(3,`app-stepper`,null,0)(5,`app-step`,3)(6,`div`,4)(7,`h1`,5),_w(8,`Start with two numbers.`),ol$1(),xi$1(9,`p`,6),_w(10,` Your birth date and how long you expect to live. Everything stays on this device — nothing is uploaded. `),ol$1(),xi$1(11,`div`,7)(12,`app-button`,8),ig(`click`,function(){$u(o);let l=ow(4);return Gu(l.next())}),_w(13,`Let's start`),ol$1()()()(),xi$1(14,`app-step`,9)(15,`div`,4)(16,`h1`,5),_w(17,`When were you born?`),ol$1(),xi$1(18,`p`,6),_w(19,`This anchors every number you'll see.`),ol$1(),xi$1(20,`app-card`,10)(21,`app-calendar`,11),bg(`selectedChange`,function(l){return $u(o),Aw(a.birthday,l)||(a.birthday=l),Gu(l)}),ol$1()(),xi$1(22,`div`,7)(23,`app-button`,12),ig(`click`,function(){$u(o);let l=ow(4);return Gu(l.previous())}),_w(24,`Back`),ol$1(),xi$1(25,`app-button`,13),ig(`click`,function(){$u(o);let l=ow(4);return Gu(l.next())}),_w(26,`Next`),ol$1()()()(),xi$1(27,`app-step`,14)(28,`div`,4)(29,`h1`,5),_w(30,`How long will you live?`),ol$1(),xi$1(31,`p`,6),_w(32,`Start from a country average, or set your own.`),ol$1(),xi$1(33,`div`,10)(34,`label`,15),_w(35,`Country`),ol$1(),xi$1(36,`select`,16),$I(),ig(`change`,function(l){return a.onCountryChange(l.target.value)}),xi$1(37,`option`,17),_w(38,`Custom`),ol$1(),PT(39,Gl,2,3,`option`,18,Hl),ol$1(),xi$1(41,`label`,19),_w(42,`Expected lifespan (years)`),ol$1(),xi$1(43,`input`,20),$I(),ol$1(),xi$1(44,`span`,21),_w(45),ol$1(),PT(46,Yl,2,1,`span`,22,Wl),ol$1(),xi$1(48,`div`,7)(49,`app-button`,12),ig(`click`,function(){$u(o);let l=ow(4);return Gu(l.previous())}),_w(50,`Back`),ol$1(),xi$1(51,`app-button`,13),ig(`click`,function(){return a.done()}),_w(52,`Done`),ol$1()()()()()()}i&2&&(GE(21),Cg(`selected`,a.birthday),GE(4),Jh(`disabled`,a.birthday()===``),GE(11),Jh(`formField`,a.lifespanForm.countryCode),WI(),GE(3),FT(a.countries),GE(4),Jh(`formField`,a.lifespanForm.lifespanYears),WI(),GE(2),cl$1(`World average · `,a.worldAverage,` years`),GE(),FT(a.lifespanForm.lifespanYears().errors()),GE(5),Jh(`disabled`,!a.canFinish()))},dependencies:[Yn,Xt,so,oo,Zi$1,$i$1],styles:[`[_nghost-%COMP%]{align-items:center;background:var(--%NS%md-sys-color-surface);box-sizing:border-box;display:flex;justify-content:center;min-height:100dvh;padding:48px 24px}.flow[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px;width:min(100%,440px)}.wordmark[_ngcontent-%COMP%]{color:var(--%NS%md-sys-color-on-surface-variant);font-size:14px;line-height:20px}.question[_ngcontent-%COMP%]{color:var(--%NS%md-sys-color-on-surface);font-size:32px;font-weight:400;line-height:40px;margin:0;text-wrap:balance}.supporting[_ngcontent-%COMP%]{color:var(--%NS%md-sys-color-on-surface-variant);font-size:16px;line-height:24px;margin:12px 0 0;max-width:60ch}.step-body[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column}.control[_ngcontent-%COMP%]{display:block;margin-top:32px}.field-label[_ngcontent-%COMP%]{color:var(--%NS%md-sys-color-on-surface);display:block;font-size:13px;font-weight:500;margin:20px 0 8px}.control[_ngcontent-%COMP%] > .field-label[_ngcontent-%COMP%]:first-child{margin-top:0}select[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{background:var(--%NS%md-sys-color-surface-container-lowest);border:1px solid var(--%NS%md-sys-color-outline);border-radius:12px;box-sizing:border-box;color:var(--%NS%md-sys-color-on-surface);font-family:inherit;font-size:16px;height:56px;padding:0 16px;width:100%}select[_ngcontent-%COMP%]:focus-visible, input[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%md-sys-color-primary);outline-offset:1px}.hint[_ngcontent-%COMP%]{color:var(--%NS%md-sys-color-on-surface-variant);display:block;font-size:12px;line-height:18px;margin-top:8px}.error[_ngcontent-%COMP%]{color:var(--%NS%md-sys-color-error);display:block;font-size:12px;line-height:18px;margin-top:8px}.actions[_ngcontent-%COMP%]{display:flex;gap:8px;justify-content:space-between;margin-top:auto;padding-top:40px}.actions[_ngcontent-%COMP%]:has(:only-child){justify-content:flex-end}@media(max-width:480px){[_nghost-%COMP%]{padding:40px 20px}.question[_ngcontent-%COMP%]{font-size:28px;line-height:36px}}`]})}return e})();export{Vb as SetupComponent};