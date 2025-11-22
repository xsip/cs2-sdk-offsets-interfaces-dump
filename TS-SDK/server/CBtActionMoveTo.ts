// generated - do not edit!

import {server_CBtNode} from './CBtNode';
// Class size: 0xE8
// BaseClass: : public CS2::server::CBtNode
export const server_CBtActionMoveTo  = {
	...server_CBtNode,
	m_szDestinationInputKey: 96n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szHidingSpotInputKey: 104n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szThreatInputKey: 112n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_vecDestination: 120n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bAutoLookAdjust: 132n, // bool m_bAutoLookAdjust; |  0x84 | Schema_Builtin | Size: 0x1
	m_bComputePath: 133n, // bool m_bComputePath; |  0x85 | Schema_Builtin | Size: 0x1
	m_flDamagingAreasPenaltyCost: 136n, // float32 m_flDamagingAreasPenaltyCost; |  0x88 | Schema_Builtin | Size: 0x4
	m_CheckApproximateCornersTimer: 144n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_CheckHighPriorityItem: 168n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_RepathTimer: 192n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_flArrivalEpsilon: 216n, // float32 m_flArrivalEpsilon; |  0xd8 | Schema_Builtin | Size: 0x4
	m_flAdditionalArrivalEpsilon2D: 220n, // float32 m_flAdditionalArrivalEpsilon2D; |  0xdc | Schema_Builtin | Size: 0x4
	m_flHidingSpotCheckDistanceThreshold: 224n, // float32 m_flHidingSpotCheckDistanceThreshold; |  0xe0 | Schema_Builtin | Size: 0x4
	m_flNearestAreaDistanceThreshold: 228n, // float32 m_flNearestAreaDistanceThreshold; |  0xe4 | Schema_Builtin | Size: 0x4
}
