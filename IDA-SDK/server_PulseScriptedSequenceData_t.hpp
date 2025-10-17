#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_PulseScriptedSequenceData_t {
    int32_t m_nActorID;
    char pad_3962[0x4];
    CUtlString m_szPreIdleSequence;
    CUtlString m_szEntrySequence;
    CUtlString m_szSequence;
    CUtlString m_szExitSequence;
    modellib_ScriptedMoveTo_t m_nMoveTo;
    modellib_SharedMovementGait_t m_nMoveToGait;
    char pad_3963[0x3];
    modellib_ScriptedHeldWeaponBehavior_t m_nHeldWeaponBehavior;
    bool m_bLoopPreIdleSequence;
    bool m_bLoopActionSequence;
    bool m_bLoopPostIdleSequence;
    bool m_bIgnoreLookAt;
};
