#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class pulse_runtime_lib_CPulse_Chunk {
    char m_Instructions[0x10];
    char m_Registers[0x10];
    char m_InstructionEditorIDs[0x10];
    char end_pad_533[0x28];
};
