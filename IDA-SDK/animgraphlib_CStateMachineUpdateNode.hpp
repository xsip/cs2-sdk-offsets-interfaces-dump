#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimStateMachineUpdater.hpp"

class animgraphlib_CStateMachineUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    animgraphlib_CAnimStateMachineUpdater m_stateMachine;
    char m_stateData[0x18];
    char m_transitionData[0x18];
    char pad_234[0x4];
    bool m_bBlockWaningTags;
    bool m_bLockStateWhenWaning;
    bool m_bResetWhenActivated;
    char end_pad_235[0x1];
};
