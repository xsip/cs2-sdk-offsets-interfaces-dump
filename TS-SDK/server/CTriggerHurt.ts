// generated - do not edit!

import {server_CBaseTrigger} from './CBaseTrigger';
// Class size: 0x910
// BaseClass: : public CS2::server::CBaseTrigger
export const server_CTriggerHurt  = {
	...server_CBaseTrigger,
	m_flOriginalDamage: 2192n, // float32 m_flOriginalDamage; |  0x890 | Schema_Builtin | Size: 0x4
	m_flDamage: 2196n, // float32 m_flDamage; |  0x894 | Schema_Builtin | Size: 0x4
	m_flDamageCap: 2200n, // float32 m_flDamageCap; |  0x898 | Schema_Builtin | Size: 0x4
	m_flLastDmgTime: 2204n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flForgivenessDelay: 2208n, // float32 m_flForgivenessDelay; |  0x8a0 | Schema_Builtin | Size: 0x4
	m_bitsDamageInflict: 2212n, // client::DamageTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_damageModel: 2216n, // int32_t m_damageModel; |  0x8a8 | Schema_Builtin | Size: 0x4
	m_bNoDmgForce: 2220n, // bool m_bNoDmgForce; |  0x8ac | Schema_Builtin | Size: 0x1
	m_vDamageForce: 2224n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_thinkAlways: 2236n, // bool m_thinkAlways; |  0x8bc | Schema_Builtin | Size: 0x1
	m_hurtThinkPeriod: 2240n, // float32 m_hurtThinkPeriod; |  0x8c0 | Schema_Builtin | Size: 0x4
	m_OnHurt: 2248n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnHurtPlayer: 2272n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_hurtEntities: 2296n, // GlobalTypes::CUtlVector<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
}
