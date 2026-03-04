// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xA90
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CPhysMagnet  = {
	...server_CBaseAnimGraph,
	m_OnMagnetAttach: 2592n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnMagnetDetach: 2616n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_massScale: 2640n, // float32 m_massScale; |  0xa50 | Schema_Builtin | Size: 0x4
	m_forceLimit: 2644n, // float32 m_forceLimit; |  0xa54 | Schema_Builtin | Size: 0x4
	m_torqueLimit: 2648n, // float32 m_torqueLimit; |  0xa58 | Schema_Builtin | Size: 0x4
	m_MagnettedEntities: 2656n, // GlobalTypes::CUtlVector<server::magnetted_objects_t>  | Schema_Atomic | Size: 0x18
	m_bActive: 2680n, // bool m_bActive; |  0xa78 | Schema_Builtin | Size: 0x1
	m_bHasHitSomething: 2681n, // bool m_bHasHitSomething; |  0xa79 | Schema_Builtin | Size: 0x1
	m_flTotalMass: 2684n, // float32 m_flTotalMass; |  0xa7c | Schema_Builtin | Size: 0x4
	m_flRadius: 2688n, // float32 m_flRadius; |  0xa80 | Schema_Builtin | Size: 0x4
	m_flNextSuckTime: 2692n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iMaxObjectsAttached: 2696n, // int32_t m_iMaxObjectsAttached; |  0xa88 | Schema_Builtin | Size: 0x4
}
