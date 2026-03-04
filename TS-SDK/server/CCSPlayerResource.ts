// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x540
// BaseClass: : public CS2::server::CBaseEntity
export const server_CCSPlayerResource  = {
	...server_CBaseEntity,
	m_bHostageAlive: 1192n, // bool m_bHostageAlive[12]; |  0x4a8 | Schema_FixedArray | Size: 0xc
	m_isHostageFollowingSomeone: 1204n, // bool m_isHostageFollowingSomeone[12]; |  0x4b4 | Schema_FixedArray | Size: 0xc
	m_iHostageEntityIDs: 1216n, // GlobalTypes::CEntityIndex[12]  | Schema_FixedArray | Size: 0x30
	m_bombsiteCenterA: 1264n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bombsiteCenterB: 1276n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hostageRescueX: 1288n, // int32_t m_hostageRescueX[4]; |  0x508 | Schema_FixedArray | Size: 0x10
	m_hostageRescueY: 1304n, // int32_t m_hostageRescueY[4]; |  0x518 | Schema_FixedArray | Size: 0x10
	m_hostageRescueZ: 1320n, // int32_t m_hostageRescueZ[4]; |  0x528 | Schema_FixedArray | Size: 0x10
	m_bEndMatchNextMapAllVoted: 1336n, // bool m_bEndMatchNextMapAllVoted; |  0x538 | Schema_Builtin | Size: 0x1
	m_foundGoalPositions: 1337n, // bool m_foundGoalPositions; |  0x539 | Schema_Builtin | Size: 0x1
}
