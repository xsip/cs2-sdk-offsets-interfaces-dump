#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CAnimStateMachineUpdater {
    char vTable219[0x8];
    char m_states[0x18];
    char m_transitions[0x18];
    char pad_220[0x18];
    int32_t m_startStateIndex;
    char pad_221[0x4];
};
