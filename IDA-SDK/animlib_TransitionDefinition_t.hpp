#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_TransitionDefinition_t {
    int16_t m_nTargetStateIdx;
    int16_t m_nConditionNodeIdx;
    int16_t m_nTransitionNodeIdx;
    bool m_bCanBeForced;
    char end_pad_1769[0x1];
};
