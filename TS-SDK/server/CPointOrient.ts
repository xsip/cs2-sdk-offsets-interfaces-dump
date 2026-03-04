// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x4C8
// BaseClass: : public CS2::server::CBaseEntity
export const server_CPointOrient  = {
	...server_CBaseEntity,
	m_iszSpawnTargetName: 1192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hTarget: 1200n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bActive: 1204n, // bool m_bActive; |  0x4b4 | Schema_Builtin | Size: 0x1
	m_nGoalDirection: 1208n, // client::PointOrientGoalDirectionType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nConstraint: 1212n, // client::PointOrientConstraint_t  | Schema_DeclaredEnum | Size: 0x4
	m_flMaxTurnRate: 1216n, // float32 m_flMaxTurnRate; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_flLastGameTime: 1220n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
