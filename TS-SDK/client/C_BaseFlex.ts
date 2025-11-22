// generated - do not edit!

import {client_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0x1368
// BaseClass: : public CS2::client::CBaseAnimGraph
export const client_C_BaseFlex  = {
	...client_CBaseAnimGraph,
	m_flexWeight: 4456n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_vLookTargetPosition: 4480n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_blinktoggle: 4624n, // bool m_blinktoggle; |  0x1210 | Schema_Builtin | Size: 0x1
	m_nLastFlexUpdateFrameCount: 4720n, // int32_t m_nLastFlexUpdateFrameCount; |  0x1270 | Schema_Builtin | Size: 0x4
	m_CachedViewTarget: 4724n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nNextSceneEventId: 4736n, // client::SceneEventId_t  | Schema_DeclaredClass | Size: 0x4
	m_iBlink: 4740n, // int32_t m_iBlink; |  0x1284 | Schema_Builtin | Size: 0x4
	m_blinktime: 4744n, // float32 m_blinktime; |  0x1288 | Schema_Builtin | Size: 0x4
	m_prevblinktoggle: 4748n, // bool m_prevblinktoggle; |  0x128c | Schema_Builtin | Size: 0x1
	m_iJawOpen: 4752n, // int32_t m_iJawOpen; |  0x1290 | Schema_Builtin | Size: 0x4
	m_flJawOpenAmount: 4756n, // float32 m_flJawOpenAmount; |  0x1294 | Schema_Builtin | Size: 0x4
	m_flBlinkAmount: 4760n, // float32 m_flBlinkAmount; |  0x1298 | Schema_Builtin | Size: 0x4
	m_iMouthAttachment: 4764n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_iEyeAttachment: 4765n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_bResetFlexWeightsOnModelChange: 4766n, // bool m_bResetFlexWeightsOnModelChange; |  0x129e | Schema_Builtin | Size: 0x1
	m_nEyeOcclusionRendererBone: 4792n, // int32_t m_nEyeOcclusionRendererBone; |  0x12b8 | Schema_Builtin | Size: 0x4
	m_mEyeOcclusionRendererCameraToBoneTransform: 4796n, // GlobalTypes::matrix3x4_t  | Schema_Atomic | Size: 0x30
	m_vEyeOcclusionRendererHalfExtent: 4844n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_PhonemeClasses: 4872n, // client::C_BaseFlex::Emphasized_Phoneme[3]  | Schema_FixedArray | Size: 0x120
}
