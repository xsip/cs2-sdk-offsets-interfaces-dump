// generated - do not edit!

import {client_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0x11F8
// BaseClass: : public CS2::client::CBaseAnimGraph
export const client_C_RagdollProp  = {
	...client_CBaseAnimGraph,
	m_ragEnabled: 4464n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_ragPos: 4488n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_ragAngles: 4512n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::QAngle>  | Schema_Atomic | Size: 0x18
	m_flBlendWeight: 4536n, // float32 m_flBlendWeight; |  0x11b8 | Schema_Builtin | Size: 0x4
	m_hRagdollSource: 4540n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_iEyeAttachment: 4544n, // modellib::AttachmentHandle_t  | Schema_DeclaredClass | Size: 0x1
	m_flBlendWeightCurrent: 4548n, // float32 m_flBlendWeightCurrent; |  0x11c4 | Schema_Builtin | Size: 0x4
	m_parentPhysicsBoneIndices: 4552n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_worldSpaceBoneComputationOrder: 4576n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
}
