#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosGroupActionMemberCountEnvelopeSchema {
    char pad_545[0x8];
    int32_t m_nBaseCount;
    int32_t m_nTargetCount;
    float32 m_flBaseValue;
    float32 m_flTargetValue;
    float32 m_flAttack;
    float32 m_flDecay;
    CUtlString m_resultVarName;
    bool m_bSaveToGroup;
    char end_pad_546[0x7];
};
