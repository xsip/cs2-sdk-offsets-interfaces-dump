// generated - do not edit!

// Class size: 0x38
// BaseClass: NONE
export const server_PulseScriptedSequenceData_t  = {
	m_nActorID: 0n, // int32_t m_nActorID; |  0x0 | Schema_Builtin | Size: 0x4
	m_szPreIdleSequence: 8n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szEntrySequence: 16n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szSequence: 24n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szExitSequence: 32n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nMoveTo: 40n, // modellib::ScriptedMoveTo_t  | Schema_DeclaredEnum | Size: 0x4
	m_nMoveToGait: 44n, // modellib::SharedMovementGait_t  | Schema_DeclaredEnum | Size: 0x1
	m_nHeldWeaponBehavior: 48n, // modellib::ScriptedHeldWeaponBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_bLoopPreIdleSequence: 52n, // bool m_bLoopPreIdleSequence; |  0x34 | Schema_Builtin | Size: 0x1
	m_bLoopActionSequence: 53n, // bool m_bLoopActionSequence; |  0x35 | Schema_Builtin | Size: 0x1
	m_bLoopPostIdleSequence: 54n, // bool m_bLoopPostIdleSequence; |  0x36 | Schema_Builtin | Size: 0x1
	m_bIgnoreLookAt: 55n, // bool m_bIgnoreLookAt; |  0x37 | Schema_Builtin | Size: 0x1
}
