#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CFootMotion {
    char m_strides[0x18];
    CUtlString m_name;
    bool m_bAdditive;
    char end_pad_325[0x7];
};
