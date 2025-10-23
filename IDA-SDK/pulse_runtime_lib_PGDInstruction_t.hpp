#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseRuntimeVarIndex_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeRegisterIndex_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeInvokeIndex_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeChunkIndex_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeCallInfoIndex_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeConstantIndex_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeDomainValueIndex_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeBlackboardReferenceIndex_t.hpp"

class pulse_runtime_lib_PGDInstruction_t {
    pulse_runtime_lib_PulseInstructionCode_t m_nCode;
    char pad_540[0x2];
    pulse_runtime_lib_PulseRuntimeVarIndex_t m_nVar;
    pulse_runtime_lib_PulseRuntimeRegisterIndex_t m_nReg0;
    pulse_runtime_lib_PulseRuntimeRegisterIndex_t m_nReg1;
    pulse_runtime_lib_PulseRuntimeRegisterIndex_t m_nReg2;
    char pad_541[0x2];
    pulse_runtime_lib_PulseRuntimeInvokeIndex_t m_nInvokeBindingIndex;
    pulse_runtime_lib_PulseRuntimeChunkIndex_t m_nChunk;
    int32_t m_nDestInstruction;
    pulse_runtime_lib_PulseRuntimeCallInfoIndex_t m_nCallInfoIndex;
    pulse_runtime_lib_PulseRuntimeConstantIndex_t m_nConstIdx;
    pulse_runtime_lib_PulseRuntimeDomainValueIndex_t m_nDomainValueIdx;
    pulse_runtime_lib_PulseRuntimeBlackboardReferenceIndex_t m_nBlackboardReferenceIdx;
    char end_pad_542[0x12];
};
