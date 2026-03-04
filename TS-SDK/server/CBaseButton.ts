// generated - do not edit!

import {server_CBaseToggle} from './CBaseToggle';
// Class size: 0x8B0
// BaseClass: : public CS2::server::CBaseToggle
export const server_CBaseButton  = {
	...server_CBaseToggle,
	m_angMoveEntitySpace: 1968n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_fStayPushed: 1980n, // bool m_fStayPushed; |  0x7bc | Schema_Builtin | Size: 0x1
	m_fRotating: 1981n, // bool m_fRotating; |  0x7bd | Schema_Builtin | Size: 0x1
	m_ls: 1984n, // server::locksound_t  | Schema_DeclaredClass | Size: 0x20
	m_sUseSound: 2016n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sLockedSound: 2024n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sUnlockedSound: 2032n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sOverrideAnticipationName: 2040n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bLocked: 2048n, // bool m_bLocked; |  0x800 | Schema_Builtin | Size: 0x1
	m_bDisabled: 2049n, // bool m_bDisabled; |  0x801 | Schema_Builtin | Size: 0x1
	m_flUseLockedTime: 2052n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bSolidBsp: 2056n, // bool m_bSolidBsp; |  0x808 | Schema_Builtin | Size: 0x1
	m_OnDamaged: 2064n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnPressed: 2088n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnUseLocked: 2112n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnIn: 2136n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnOut: 2160n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_nState: 2184n, // int32_t m_nState; |  0x888 | Schema_Builtin | Size: 0x4
	m_hConstraint: 2188n, // GlobalTypes::CEntityHandle  | Schema_Atomic | Size: 0x4
	m_hConstraintParent: 2192n, // GlobalTypes::CEntityHandle  | Schema_Atomic | Size: 0x4
	m_bForceNpcExclude: 2196n, // bool m_bForceNpcExclude; |  0x894 | Schema_Builtin | Size: 0x1
	m_sGlowEntity: 2200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_glowEntity: 2208n, // GlobalTypes::CHandle<server::CBaseModelEntity>  | Schema_Atomic | Size: 0x4
	m_usable: 2212n, // bool m_usable; |  0x8a4 | Schema_Builtin | Size: 0x1
	m_szDisplayText: 2216n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
}
