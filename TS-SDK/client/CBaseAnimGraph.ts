// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x1168
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_CBaseAnimGraph  = {
	...client_C_BaseModelEntity,
	m_graphControllerManager: 3720n, // client::CAnimGraphControllerManager  | Schema_DeclaredClass | Size: 0xb0
	m_pMainGraphController: 3896n, // client::CAnimGraphControllerBase**  | Schema_Ptr | Size: 0x8
	m_bInitiallyPopulateInterpHistory: 3904n, // bool m_bInitiallyPopulateInterpHistory; |  0xf40 | Schema_Builtin | Size: 0x1
	m_bSuppressAnimEventSounds: 3906n, // bool m_bSuppressAnimEventSounds; |  0xf42 | Schema_Builtin | Size: 0x1
	m_bAnimGraphUpdateEnabled: 3920n, // bool m_bAnimGraphUpdateEnabled; |  0xf50 | Schema_Builtin | Size: 0x1
	m_flMaxSlopeDistance: 3924n, // float32 m_flMaxSlopeDistance; |  0xf54 | Schema_Builtin | Size: 0x4
	m_vLastSlopeCheckPos: 3928n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_nAnimGraphUpdateId: 3940n, // uint32_t m_nAnimGraphUpdateId; |  0xf64 | Schema_Builtin | Size: 0x4
	m_bAnimationUpdateScheduled: 3944n, // bool m_bAnimationUpdateScheduled; |  0xf68 | Schema_Builtin | Size: 0x1
	m_vecForce: 3948n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nForceBone: 3960n, // int32_t m_nForceBone; |  0xf78 | Schema_Builtin | Size: 0x4
	m_pClientsideRagdoll: 3968n, // client::CBaseAnimGraph**  | Schema_Ptr | Size: 0x8
	m_bBuiltRagdoll: 3976n, // bool m_bBuiltRagdoll; |  0xf88 | Schema_Builtin | Size: 0x1
	m_RagdollPose: 4000n, // client::PhysicsRagdollPose_t  | Schema_DeclaredClass | Size: 0x48
	m_bRagdollEnabled: 4072n, // bool m_bRagdollEnabled; |  0xfe8 | Schema_Builtin | Size: 0x1
	m_bRagdollClientSide: 4073n, // bool m_bRagdollClientSide; |  0xfe9 | Schema_Builtin | Size: 0x1
	m_bHasAnimatedMaterialAttributes: 4088n, // bool m_bHasAnimatedMaterialAttributes; |  0xff8 | Schema_Builtin | Size: 0x1
}
