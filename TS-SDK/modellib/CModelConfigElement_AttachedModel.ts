// generated - do not edit!

import {modellib_CModelConfigElement} from './CModelConfigElement';
// Class size: 0xE8
// BaseClass: : public CS2::modellib::CModelConfigElement
export const modellib_CModelConfigElement_AttachedModel  = {
	...modellib_CModelConfigElement,
	m_InstanceName: 72n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_EntityClass: 80n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_hModel: 88n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCModel>  | Schema_Atomic | Size: 0x8
	m_vOffset: 96n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_aAngOffset: 108n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_AttachmentName: 120n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_LocalAttachmentOffsetName: 128n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_AttachmentType: 136n, // modellib::ModelConfigAttachmentType_t  | Schema_DeclaredEnum | Size: 0x4
	m_bBoneMergeFlex: 140n, // bool m_bBoneMergeFlex; |  0x8c | Schema_Builtin | Size: 0x1
	m_bUserSpecifiedColor: 141n, // bool m_bUserSpecifiedColor; |  0x8d | Schema_Builtin | Size: 0x1
	m_bUserSpecifiedMaterialGroup: 142n, // bool m_bUserSpecifiedMaterialGroup; |  0x8e | Schema_Builtin | Size: 0x1
	m_bAcceptParentMaterialDrivenDecals: 143n, // bool m_bAcceptParentMaterialDrivenDecals; |  0x8f | Schema_Builtin | Size: 0x1
	m_BodygroupOnOtherModels: 144n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_MaterialGroupOnOtherModels: 152n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
}
