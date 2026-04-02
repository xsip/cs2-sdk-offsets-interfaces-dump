// generated - do not edit!

import {client_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0x1350
// BaseClass: : public CS2::client::CBaseAnimGraph
export const client_C_BaseFlex  = {
	...client_CBaseAnimGraph,
	m_flexWeight: 4464n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_vLookTargetPosition: 4488n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_nLastFlexUpdateFrameCount: 4720n, // int32_t m_nLastFlexUpdateFrameCount; |  0x1270 | Schema_Builtin | Size: 0x4
	m_CachedViewTarget: 4724n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nNextSceneEventId: 4736n, // client::SceneEventId_t  | Schema_DeclaredClass | Size: 0x4
	m_iMouthAttachment: 4740n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_iEyeAttachment: 4741n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_bResetFlexWeightsOnModelChange: 4742n, // bool m_bResetFlexWeightsOnModelChange; |  0x1286 | Schema_Builtin | Size: 0x1
	m_nEyeOcclusionRendererBone: 4768n, // int32_t m_nEyeOcclusionRendererBone; |  0x12a0 | Schema_Builtin | Size: 0x4
	m_mEyeOcclusionRendererCameraToBoneTransform: 4772n, // GlobalTypes::matrix3x4_t  | Schema_Atomic | Size: 0x30
	m_vEyeOcclusionRendererHalfExtent: 4820n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_PhonemeClasses: 4848n, // client::C_BaseFlex::Emphasized_Phoneme[3]  | Schema_FixedArray | Size: 0x60
}
