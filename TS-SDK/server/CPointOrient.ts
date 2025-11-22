// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x510
// BaseClass: : public CS2::server::CBaseEntity
export const server_CPointOrient  = {
	...server_CBaseEntity,
	m_iszSpawnTargetName: 1264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hTarget: 1272n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bActive: 1276n, // bool m_bActive; |  0x4fc | Schema_Builtin | Size: 0x1
	m_nGoalDirection: 1280n, // client::PointOrientGoalDirectionType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nConstraint: 1284n, // client::PointOrientConstraint_t  | Schema_DeclaredEnum | Size: 0x4
	m_flMaxTurnRate: 1288n, // float32 m_flMaxTurnRate; |  0x508 | Schema_Builtin | Size: 0x4
	m_flLastGameTime: 1292n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
