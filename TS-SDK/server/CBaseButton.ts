// generated - do not edit!

import {server_CBaseToggle} from './CBaseToggle';
// Class size: 0x9A8
// BaseClass: : public CS2::server::CBaseToggle
export const server_CBaseButton  = {
	...server_CBaseToggle,
	m_angMoveEntitySpace: 2136n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_fStayPushed: 2148n, // bool m_fStayPushed; |  0x864 | Schema_Builtin | Size: 0x1
	m_fRotating: 2149n, // bool m_fRotating; |  0x865 | Schema_Builtin | Size: 0x1
	m_ls: 2152n, // server::locksound_t  | Schema_DeclaredClass | Size: 0x20
	m_sUseSound: 2184n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sLockedSound: 2192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sUnlockedSound: 2200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sOverrideAnticipationName: 2208n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bLocked: 2216n, // bool m_bLocked; |  0x8a8 | Schema_Builtin | Size: 0x1
	m_bDisabled: 2217n, // bool m_bDisabled; |  0x8a9 | Schema_Builtin | Size: 0x1
	m_flUseLockedTime: 2220n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bSolidBsp: 2224n, // bool m_bSolidBsp; |  0x8b0 | Schema_Builtin | Size: 0x1
	m_OnDamaged: 2232n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnPressed: 2272n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnUseLocked: 2312n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnIn: 2352n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnOut: 2392n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_nState: 2432n, // int32_t m_nState; |  0x980 | Schema_Builtin | Size: 0x4
	m_hConstraint: 2436n, // GlobalTypes::CEntityHandle  | Schema_Atomic | Size: 0x4
	m_hConstraintParent: 2440n, // GlobalTypes::CEntityHandle  | Schema_Atomic | Size: 0x4
	m_bForceNpcExclude: 2444n, // bool m_bForceNpcExclude; |  0x98c | Schema_Builtin | Size: 0x1
	m_sGlowEntity: 2448n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_glowEntity: 2456n, // GlobalTypes::CHandle<server::CBaseModelEntity>  | Schema_Atomic | Size: 0x4
	m_usable: 2460n, // bool m_usable; |  0x99c | Schema_Builtin | Size: 0x1
	m_szDisplayText: 2464n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
}
