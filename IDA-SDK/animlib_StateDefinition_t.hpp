#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_StateDefinition_t {
    int16_t m_nStateNodeIdx;
    int16_t m_nEntryConditionNodeIdx;
    char pad_1768[0x4];
    char m_transitionDefinitions[0x30];
};
