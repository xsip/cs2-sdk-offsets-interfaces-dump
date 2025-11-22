// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0xA90
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBaseAnimGraph  = {
	...server_CBaseModelEntity,
	m_bInitiallyPopulateInterpHistory: 2136n, // bool m_bInitiallyPopulateInterpHistory; |  0x858 | Schema_Builtin | Size: 0x1
	m_pChoreoServices: 2144n, // client::IChoreoServices**  | Schema_Ptr | Size: 0x8
	m_bAnimGraphUpdateEnabled: 2152n, // bool m_bAnimGraphUpdateEnabled; |  0x868 | Schema_Builtin | Size: 0x1
	m_flMaxSlopeDistance: 2156n, // float32 m_flMaxSlopeDistance; |  0x86c | Schema_Builtin | Size: 0x4
	m_vLastSlopeCheckPos: 2160n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_bAnimationUpdateScheduled: 2172n, // bool m_bAnimationUpdateScheduled; |  0x87c | Schema_Builtin | Size: 0x1
	m_vecForce: 2176n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nForceBone: 2188n, // int32_t m_nForceBone; |  0x88c | Schema_Builtin | Size: 0x4
	m_RagdollPose: 2208n, // server::PhysicsRagdollPose_t  | Schema_DeclaredClass | Size: 0x28
	m_bRagdollEnabled: 2248n, // bool m_bRagdollEnabled; |  0x8c8 | Schema_Builtin | Size: 0x1
	m_bRagdollClientSide: 2249n, // bool m_bRagdollClientSide; |  0x8c9 | Schema_Builtin | Size: 0x1
	m_xParentedRagdollRootInEntitySpace: 2256n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
}
