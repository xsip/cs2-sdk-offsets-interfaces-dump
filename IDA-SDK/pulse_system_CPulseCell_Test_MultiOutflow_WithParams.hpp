#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_SignatureOutflow_Continue.hpp"

class pulse_system_CPulseCell_Test_MultiOutflow_WithParams {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_SignatureOutflow_Continue m_Out1;
    pulse_runtime_lib_SignatureOutflow_Continue m_Out2;
};
