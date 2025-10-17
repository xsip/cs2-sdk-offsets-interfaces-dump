#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimStateMachineUpdater.hpp"

class animgraphlib_CStateMachineUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable222[0x18];
    animgraphlib_CAnimStateMachineUpdater m_stateMachine;
    char m_stateData[0x18];
    char m_transitionData[0x18];
    char pad_223[0x4];
    bool m_bBlockWaningTags;
    bool m_bLockStateWhenWaning;
    bool m_bResetWhenActivated;
    char end_pad_224[0x1];
};
