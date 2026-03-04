#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimComponentID.hpp"
#include "animgraphlib_CAnimStateMachineUpdater.hpp"

class animgraphlib_CStateMachineComponentUpdater {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CUtlString m_name;
    modellib_AnimComponentID m_id;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    bool m_bStartEnabled;
    char end_pad_11[0x7];
    animgraphlib_CAnimStateMachineUpdater m_stateMachine;
};
