#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_MaterialGroup_t {
    CUtlString m_name;
    char m_materials[0x18];
};
