// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x808
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBreakable  = {
	...server_CBaseModelEntity,
	m_CPropDataComponent: 1848n, // server::CPropDataComponent  | Schema_DeclaredClass | Size: 0x40
	m_Material: 1912n, // server::Materials  | Schema_DeclaredEnum | Size: 0x4
	m_hBreaker: 1916n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_Explosion: 1920n, // server::Explosions  | Schema_DeclaredEnum | Size: 0x4
	m_iszSpawnObject: 1928n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flPressureDelay: 1936n, // float32 m_flPressureDelay; |  0x790 | Schema_Builtin | Size: 0x4
	m_iMinHealthDmg: 1940n, // int32_t m_iMinHealthDmg; |  0x794 | Schema_Builtin | Size: 0x4
	m_iszPropData: 1944n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_impactEnergyScale: 1952n, // float32 m_impactEnergyScale; |  0x7a0 | Schema_Builtin | Size: 0x4
	m_nOverrideBlockLOS: 1956n, // server::EOverrideBlockLOS_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnStartDeath: 1960n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnBreak: 1984n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnHealthChanged: 2008n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_PerformanceMode: 2040n, // client::PerformanceMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_hPhysicsAttacker: 2044n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flLastPhysicsInfluenceTime: 2048n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
