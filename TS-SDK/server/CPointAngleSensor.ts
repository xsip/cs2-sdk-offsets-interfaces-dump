// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x5B8
// BaseClass: : public CS2::server::CPointEntity
export const server_CPointAngleSensor  = {
	...server_CPointEntity,
	m_bDisabled: 1264n, // bool m_bDisabled; |  0x4f0 | Schema_Builtin | Size: 0x1
	m_nLookAtName: 1272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hTargetEntity: 1280n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hLookAtEntity: 1284n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flDuration: 1288n, // float32 m_flDuration; |  0x508 | Schema_Builtin | Size: 0x4
	m_flDotTolerance: 1292n, // float32 m_flDotTolerance; |  0x50c | Schema_Builtin | Size: 0x4
	m_flFacingTime: 1296n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bFired: 1300n, // bool m_bFired; |  0x514 | Schema_Builtin | Size: 0x1
	m_OnFacingLookat: 1304n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnNotFacingLookat: 1344n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_TargetDir: 1384n, // GlobalTypes::CEntityOutputTemplate<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x28
	m_FacingPercentage: 1424n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
}
