#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CBoneConstraintRbf {
    char pad_308[0x20];
    char m_inputBones[0x18];
    char m_outputBones[0x18];
    char end_pad_316[0x78];
};
