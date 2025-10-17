#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseRuntimeRegisterIndex_t.hpp"

class pulse_runtime_lib_CPulse_RegisterInfo {
    pulse_runtime_lib_PulseRuntimeRegisterIndex_t m_nReg;
    char pad_537[0x6];
    CPulseValueFullType m_Type;
    CKV3MemberNameWithStorage m_OriginName;
    int32_t m_nWrittenByInstruction;
    int32_t m_nLastReadByInstruction;
};
