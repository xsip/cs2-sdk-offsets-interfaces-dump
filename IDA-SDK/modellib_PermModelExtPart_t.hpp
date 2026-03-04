#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_PermModelExtPart_t {
    CTransform m_Transform;
    CUtlString m_Name;
    int32_t m_nParent;
    char pad_391[0x4];
    char m_refModel[0x8];
    char end_pad_392[0x8];
};
