#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_FootStepTrigger {
    char m_tags[0x18];
    int32_t m_nFootIndex;
    animgraphlib_StepPhase m_triggerPhase;
};
