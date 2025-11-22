// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xB20
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CPhysMagnet  = {
	...server_CBaseAnimGraph,
	m_OnMagnetAttach: 2704n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnMagnetDetach: 2744n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_massScale: 2784n, // float32 m_massScale; |  0xae0 | Schema_Builtin | Size: 0x4
	m_forceLimit: 2788n, // float32 m_forceLimit; |  0xae4 | Schema_Builtin | Size: 0x4
	m_torqueLimit: 2792n, // float32 m_torqueLimit; |  0xae8 | Schema_Builtin | Size: 0x4
	m_MagnettedEntities: 2800n, // GlobalTypes::CUtlVector<server::magnetted_objects_t>  | Schema_Atomic | Size: 0x18
	m_bActive: 2824n, // bool m_bActive; |  0xb08 | Schema_Builtin | Size: 0x1
	m_bHasHitSomething: 2825n, // bool m_bHasHitSomething; |  0xb09 | Schema_Builtin | Size: 0x1
	m_flTotalMass: 2828n, // float32 m_flTotalMass; |  0xb0c | Schema_Builtin | Size: 0x4
	m_flRadius: 2832n, // float32 m_flRadius; |  0xb10 | Schema_Builtin | Size: 0x4
	m_flNextSuckTime: 2836n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iMaxObjectsAttached: 2840n, // int32_t m_iMaxObjectsAttached; |  0xb18 | Schema_Builtin | Size: 0x4
}
