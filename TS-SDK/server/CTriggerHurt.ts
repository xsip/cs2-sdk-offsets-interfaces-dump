// generated - do not edit!

import {server_CBaseTrigger} from './CBaseTrigger';
// Class size: 0xA48
// BaseClass: : public CS2::server::CBaseTrigger
export const server_CTriggerHurt  = {
	...server_CBaseTrigger,
	m_flOriginalDamage: 2472n, // float32 m_flOriginalDamage; |  0x9a8 | Schema_Builtin | Size: 0x4
	m_flDamage: 2476n, // float32 m_flDamage; |  0x9ac | Schema_Builtin | Size: 0x4
	m_flDamageCap: 2480n, // float32 m_flDamageCap; |  0x9b0 | Schema_Builtin | Size: 0x4
	m_flLastDmgTime: 2484n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flForgivenessDelay: 2488n, // float32 m_flForgivenessDelay; |  0x9b8 | Schema_Builtin | Size: 0x4
	m_bitsDamageInflict: 2492n, // client::DamageTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_damageModel: 2496n, // int32_t m_damageModel; |  0x9c0 | Schema_Builtin | Size: 0x4
	m_bNoDmgForce: 2500n, // bool m_bNoDmgForce; |  0x9c4 | Schema_Builtin | Size: 0x1
	m_vDamageForce: 2504n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_thinkAlways: 2516n, // bool m_thinkAlways; |  0x9d4 | Schema_Builtin | Size: 0x1
	m_hurtThinkPeriod: 2520n, // float32 m_hurtThinkPeriod; |  0x9d8 | Schema_Builtin | Size: 0x4
	m_OnHurt: 2528n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnHurtPlayer: 2568n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_hurtEntities: 2608n, // server::CUtlVector<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
}
