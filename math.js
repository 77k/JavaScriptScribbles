/**
 * just code
 *
 */

try { WebGLFloatArray; } catch (e) { WebGLFloatArray = Float32Array; }
glMatrixArrayType = WebGLFloatArray;
var Vector3Df = {};
var Vector4Df = {};

var Matrix3x3f = {};
var Matrix4x4f = {};

Vector3Df.create = function(vec0)
{
    var vec = new glMatrixArrayType(3);
    if(vec0)
    {
        vec[0] = vec0[0];
        vec[1] = vec0[1];
        vec[2] = vec0[2];

    }else{
        vec[0] = vec[1] = vec[2] = 0.0;
    }
    return vec;
};

Vector4Df.create = function(vec0)
{
    var vec = new glMatrixArrayType(4);
    if(vec0)
    {
        vec[0] = vec0[0];
        vec[1] = vec0[1];
        vec[2] = vec0[2];
        vec[3] = vec0[3];

    }else{
        vec[0] = vec[1] = vec[2] = 0.0; vec[3] = 1.0;
    }
    return vec;
};

Vector4Df.mulmat = function(m, d, s)
{
    var a = new glMatrixArrayType(4);
    //a = d;//Vector4Df.create(d);
    var b = new glMatrixArrayType(4);
    b = s;
    idx = Matrix4x4f.idx;
    a[0] = s[0] * m[idx(0, 0)] +  s[1] * m[idx(0, 1)] +  s[2] * m[idx(0, 2)] +  s[3] * m[idx(0, 3)];
    a[1] = b[1] * m[idx(1, 0)] +  b[1] * m[idx(1, 1)] +  b[2] * m[idx(1, 2)] +  b[3] * m[idx(1, 3)];
    a[2] = b[2] * m[idx(2, 0)] +  b[1] * m[idx(2, 1)] +  b[2] * m[idx(2, 2)] +  b[3] * m[idx(2, 3)];
    a[3] = b[3] * m[idx(3, 0)] +  b[1] * m[idx(3, 1)] +  b[2] * m[idx(3, 2)] +  b[3] * m[idx(3, 3)];
    return a;
}

Vector3Df.set = function(dst, srcu)
{

    dst[0] = src[0];
    dst[1] = src[1];
    dst[2] = src[2];

    return dst;
};

Vector3Df.add = function(a, b)
{
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
    return a;
};

Vector3Df.sub = function(a, b)
{
    Vector3Df.add(a, -b);
    return a;
};

Vector3Df.cross = function(a, b)
{
    var t = Vector3Df.create(a);

    a[0] = t[1] * b[2] - b[1] * t[2];
    a[1] = t[2] * b[0] - b[2] * t[0];
    a[2] = t[0] * b[1] - b[0] * t[1];

    return a;
};

Vector3Df.dot = function(a, b)
{
    var s = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    return s;
};

Vector3Df.normalize = function(a)
{
    var s = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
    if(s > 0.0)
    {
        s = 1.0/s; a[0] *= s; a[1] *= s; a[2] *=s;
    }else{
        a[0] = a[1] = 0.0; a[2] = 1.0;
    }

    return a;
};

Vector3Df.length = function(a)
{
    var s = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
    return s;
};

Vector3Df.lengthSqr = function(a)
{
    var s = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    return s;

};

Vector3Df.getVector4Df = function(a)
{
    var t = Vector4Df.create();

    t[0] = a[0]; t[1] = a[1]; t[2] = a[2]; t[3] = 1.0;
    return t;
};


Matrix3x3f.create = function(mat0)
{
    var mat = new glMatrixArrayType(3 * 3);
    if(mat0)
    {
        for(var i = 0; i < 3 * 3; i++)
        {
            mat[i] = mat0[i];
        }

    }else{
        for(var i = 0; i < 3 * 3; i++)
        {
            mat[i] = 0.0;
        }
    }
    return mat;
};

Matrix4x4f.create = function(mat0)
{
    var mat = new glMatrixArrayType(4 * 4);
    if(mat0)
    {
        for(var i = 0; i < 4 * 4; i++)
        {
            mat[i] = mat0[i];
        }

    }else{
        for(var i = 0; i < 4 * 4; i++)
        {
            mat[i] = 0.0;
        }
    }
    return mat;
};


Matrix3x3f.set = function(a, b)
{   
    for(var i = 0; i < 3 * 3; i++)
    {
        a[i] = b[i];
    }

    return a;
}

Matrix4x4f.set = function(a, b)
{   
    for(var i = 0; i < 4 * 4; i++)
    {
        a[i] = b[i];
    }

    return a;
}
Matrix3x3f.add = function(a, b)
{
    return a;
};

Matrix3x3f.sub = function(a, b)
{
    return a;
};

Matrix3x3f.mul = function(a, b)
{

    return a;
};

Matrix3x3f.idx = function(i, j)
{
    var id = 3 * i + j;
    return id;
};

Matrix3x3f.identity = function(a)
{
    idx = Matrix3x3f.idx;
    a[idx(0, 0)] = a[idx(1, 1)] = a[idx(2, 2)] = 1.0;
    return a;
};

Matrix3x3f.transpose = function(a)
{
    idx = Matrix3x3f.idx;
    var s;
    s = a[idx(0, 2)]; a[idx(0, 2)] = a[idx(2, 0)]; a[idx(2, 0)] = s;
    s = a[idx(0, 1)]; a[idx(0, 1)] = a[idx(1, 0)]; a[idx(1, 0)] = s;
    s = a[idx(1, 2)]; a[idx(1, 2)] = a[idx(2, 1)]; a[idx(2, 1)] = s;
    return a;
};

Matrix3x3f.determinant = function(a)
{
    idx = Matrix3x3f.idx;
    var s = a[idx(0, 0)] * (a[idx(1, 1)] * a[idx(2, 2)] - a[idx(2, 1)] * a[idx(1, 2)]) +
        a[idx(1, 0)] * (a[idx(2, 1)] * a[idx(0, 2)] - a[idx(0, 1)] * a[idx(2, 2)]) +
        a[idx(2, 0)] * (a[idx(0, 1)] * a[idx(1, 2)] - a[idx(1, 1)] * a[idx(0, 2)]);
    return s;
};

Matrix3x3f.det = function(a)
{
    idx = Matrix3x3f.idx;
    var s = a[idx(0,0)] * a[idx(1, 1)] * a[idx(2, 2)] +
        a[idx(0,1)] * a[idx(1, 2)] * a[idx(2, 0)] +
        a[idx(0,2)] * a[idx(1, 0)] * a[idx(2, 1)] -
        (   a[idx(2,0)] * a[idx(1, 1)] * a[idx(0, 2)] +
            a[idx(2,1)] * a[idx(1, 2)] * a[idx(0, 0)] +
            a[idx(2,2)] * a[idx(1, 0)] * a[idx(0, 1)]   );
    return s;

}

Matrix3x3f.string = function(a)
{
    idx = Matrix3x3f.idx;
    return "[(" +
        a[idx(0, 0)] + ", " + a[idx(0, 1)] + ", " + a[idx(0, 2)] + "), \n  " +
        a[idx(1, 0)] + ", " + a[idx(1, 1)] + ", " + a[idx(1, 2)] + "), \n  " +
        a[idx(2, 0)] + ", " + a[idx(2, 1)] + ", " + a[idx(2, 2)] + ")] \n";
};

Matrix3x3f.string_octave = function(a)
{
    idx = Matrix3x3f.idx;
    return "[" +
        a[idx(0, 0)] + "," + a[idx(0, 1)] + "," + a[idx(0, 2)] + ";" +
        a[idx(1, 0)] + "," + a[idx(1, 1)] + "," + a[idx(1, 2)] + ";" +
        a[idx(2, 0)] + "," + a[idx(2, 1)] + "," + a[idx(2, 2)] + "]";
};

Matrix4x4f.idx = function(i, j)
{
    var id = 4 * i + j;
    return id;
};

Matrix4x4f.set = function(a, b)
{
    for(var i = 0; i < 16; i++)
    {
        a[i] = b[i];
    }
    return a;
};
Matrix3x3f.getMatrix4x4f = function(a)
{ 
    idx3 = Matrix3x3f.idx;
    idx4 = Matrix4x4f.idx;
    var t = Matrix4x4f.create();
    t[idx4(0, 0)] = a[idx3(0, 0)]; t[idx4(0, 1)] = a[idx3(0, 1)]; t[idx4(0, 2)] = a[idx3(0, 2)]; t[idx4(0, 3)] = 0;
    t[idx4(1, 0)] = a[idx3(1, 0)]; t[idx4(1, 1)] = a[idx3(1, 1)]; t[idx4(1, 2)] = a[idx3(1, 2)]; t[idx4(1, 3)] = 0;
    t[idx4(2, 0)] = a[idx3(2, 0)]; t[idx4(2, 1)] = a[idx3(2, 1)]; t[idx4(2, 2)] = a[idx3(2, 2)]; t[idx4(2, 3)] = 0;
    t[idx4(3, 0)] = 0; t[idx4(3, 1)] = 0; t[idx4(3, 2)] = 0; t[idx4(3, 3)] = 1;
    return t;
};

Matrix4x4f.add = function(a, b)
{
    return a;
};

Matrix4x4f.sub = function(a, b)
{
    return a;
};

Matrix4x4f.setEuler = function(mat, a, b, c)
{

    a *= 3.14159265359/180.0;
    b *= 3.14159265359/180.0;
    c *= 3.14159265359/180.0;

    ca = Math.cos(a); sa = Math.sin(a);
    cb = Math.cos(b); sb = Math.sin(b);
    cc = Math.cos(c); sc = Math.sin(c);
    mat[0]= ca*cb;
    mat[4]= sa*cb;
    mat[8]=-sb;

    mat[1]=-sa*cc+ca*sc*sb;
    mat[5]= ca*cc+sa*sc*sb;
    mat[9]= cb*sc;

    mat[2]= sa*sc+ca*cc*sb;
    mat[6]=-ca*sc+sa*cc*sb;
    mat[10]= cb*cc;

    mat[3]= 0.0;
    mat[7]= 0.0;
    mat[11]= 0.0;

    mat[12]= 0.0; //z
    mat[13]= 0.0; //y
    mat[14]= 0.0; //x

    mat[15]= 1.0;

    return mat;

};

Matrix4x4f.mul = function(a, b)
{
    idx = Matrix4x4f.idx;

    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    var b00 = b[0], b01 = b[1], b02 = b[2], b03 = b[3];
    var b10 = b[4], b11 = b[5], b12 = b[6], b13 = b[7];
    var b20 = b[8], b21 = b[9], b22 = b[10], b23 = b[11];
    var b30 = b[12], b31 = b[13], b32 = b[14], b33 = b[15];

    a[0] = b00*a00 + b01*a10 + b02*a20 + b03*a30;
    a[1] = b00*a01 + b01*a11 + b02*a21 + b03*a31;
    a[2] = b00*a02 + b01*a12 + b02*a22 + b03*a32;
    a[3] = b00*a03 + b01*a13 + b02*a23 + b03*a33;
    a[4] = b10*a00 + b11*a10 + b12*a20 + b13*a30;
    a[5] = b10*a01 + b11*a11 + b12*a21 + b13*a31;
    a[6] = b10*a02 + b11*a12 + b12*a22 + b13*a32;
    a[7] = b10*a03 + b11*a13 + b12*a23 + b13*a33;
    a[8] = b20*a00 + b21*a10 + b22*a20 + b23*a30;
    a[9] = b20*a01 + b21*a11 + b22*a21 + b23*a31;
    a[10] = b20*a02 + b21*a12 + b22*a22 + b23*a32;
    a[11] = b20*a03 + b21*a13 + b22*a23 + b23*a33;
    a[12] = b30*a00 + b31*a10 + b32*a20 + b33*a30;
    a[13] = b30*a01 + b31*a11 + b32*a21 + b33*a31;
    a[14] = b30*a02 + b31*a12 + b32*a22 + b33*a32;
    a[15] = b30*a03 + b31*a13 + b32*a23 + b33*a33;


    return a;
};

Matrix4x4f.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};



Matrix4x4f.identity = function(a)
{
    idx = Matrix4x4f.idx;
    a[idx(0, 0)] = a[idx(1, 1)] = a[idx(2, 2)] = a[idx(3, 3)] = 1.0;
    return a;
};

Matrix4x4f.transpose = function(a)
{
    idx = Matrix4x4f.idx;
    var s;
    s = a[idx(0, 2)]; a[idx(0, 2)] = a[idx(2, 0)]; a[idx(2, 0)] = s;
    s = a[idx(0, 1)]; a[idx(0, 1)] = a[idx(1, 0)]; a[idx(1, 0)] = s;
    s = a[idx(1, 2)]; a[idx(1, 2)] = a[idx(2, 1)]; a[idx(2, 1)] = s;
    s = a[idx(0, 3)]; a[idx(0, 3)] = a[idx(3, 0)]; a[idx(3, 0)] = s;
    s = a[idx(1, 3)]; a[idx(1, 3)] = a[idx(3, 1)]; a[idx(3, 1)] = s;
    s = a[idx(2, 3)]; a[idx(2, 3)] = a[idx(3, 2)]; a[idx(3, 2)] = s;

    return a;
};

Matrix4x4f.determinant = function(a)
{
    idx = Matrix4x4f.idx;
    var s =  a[idx(2, 0)] * (a[idx(0, 1)] * (a[idx(1, 2)] * a[idx(3, 3)] - a[idx(3, 2)] * a[idx(1, 3)]) +
            a[idx(1, 1)] * (a[idx(3, 2)] * a[idx(0, 3)] - a[idx(0, 2)] * a[idx(3, 3)]) +
            a[idx(3, 1)] * (a[idx(0, 2)] * a[idx(1, 3)] - a[idx(1, 2)] * a[idx(0, 3)]))  -
        a[idx(2, 1)] * (a[idx(0, 0)] * (a[idx(1, 2)] * a[idx(3, 3)] - a[idx(3, 2)] * a[idx(1, 3)]) +
                a[idx(1, 0)] * (a[idx(3, 2)] * a[idx(0, 3)] - a[idx(0, 2)] * a[idx(3, 3)]) +
                a[idx(3, 0)] * (a[idx(0, 2)] * a[idx(1, 3)] - a[idx(1, 2)] * a[idx(3, 0)]))  +
        a[idx(2, 2)] * (a[idx(0, 0)] * (a[idx(1, 1)] * a[idx(3, 3)] - a[idx(3, 1)] * a[idx(1, 3)]) +
                a[idx(1, 0)] * (a[idx(3, 1)] * a[idx(0, 3)] - a[idx(0, 1)] * a[idx(3, 3)]) +
                a[idx(3, 0)] * (a[idx(0, 1)] * a[idx(1, 3)] - a[idx(1, 1)] * a[idx(3, 0)]))  -
        a[idx(2, 3)] * (a[idx(0, 0)] * (a[idx(1, 1)] * a[idx(3, 2)] - a[idx(3, 1)] * a[idx(1, 2)]) +
                a[idx(1, 0)] * (a[idx(3, 1)] * a[idx(0, 2)] - a[idx(0, 1)] * a[idx(3, 2)]) +
                a[idx(3, 0)] * (a[idx(0, 1)] * a[idx(1, 2)] - a[idx(1, 1)] * a[idx(0, 2)]));  
    return s;
};

Matrix4x4f.string = function(a)
{
    idx = Matrix4x4f.idx;
    return "[(" +
        a[idx(0, 0)] + ", " + a[idx(0, 1)] + ", " + a[idx(0, 2)] + ", " + a[idx(0, 3)] + "), \n  " +
        a[idx(1, 0)] + ", " + a[idx(1, 1)] + ", " + a[idx(1, 2)] + ", " + a[idx(1, 3)] + "), \n  " +
        a[idx(2, 0)] + ", " + a[idx(2, 1)] + ", " + a[idx(2, 2)] + ", " + a[idx(2, 3)] + "), \n  " +
        a[idx(3, 0)] + ", " + a[idx(3, 1)] + ", " + a[idx(3, 2)] + ", " + a[idx(3, 3)] + "), \n  " +
        ")] \n";

};

Matrix4x4f.string_octave = function(a)
{
    idx = Matrix4x4f.idx;
    return "[" +
        a[idx(0, 0)] + ", " + a[idx(0, 1)] + ", " + a[idx(0, 2)] + ", " + a[idx(0, 3)] + ";  " +
        a[idx(1, 0)] + ", " + a[idx(1, 1)] + ", " + a[idx(1, 2)] + ", " + a[idx(1, 3)] + ";  " +
        a[idx(2, 0)] + ", " + a[idx(2, 1)] + ", " + a[idx(2, 2)] + ", " + a[idx(2, 3)] + ";  " +
        a[idx(3, 0)] + ", " + a[idx(3, 1)] + ", " + a[idx(3, 2)] + ", " + a[idx(3, 3)] + ";  " +
        "]";

};

Quaternion = {}

Quaternion.create = function()
{
    var q = new glMatrixArrayType(4);
    return q;
}


function Matrix3x3()
{
    this.v = Matrix3x3f.create();
    Matrix3x3f.identify(this.v);
}

function Matrix4x3()
{
    this.v = Matrix4x4f.create();
    Matrix4x4f.identity(this.v);
}

Matrix4x3.prototype = 
{

    make : function(x1, x2, x3, y1, y2, y3, z1, z2, z3, t1, t2, t3) {
        this.v[0] = x1;
        this.v[1] = x2;
        this.v[2] = x3;
        this.v[4] = y1;
        this.v[5] = y2;
        this.v[6] = y3;
        this.v[8] = z1;
        this.v[9] = z2;
        this.v[10] = z3;
        this.v[12] = t1;
        this.v[13] = t2;
        this.v[14] = t3;
        return this;
    },

    makeIdentity : function() {
        return Matrix4x4f.identity(this.v);
    },

    makeRotate : function(angle, x, y, z) {
        var invlen = 1 / Math.sqrt(x*x+y*y+z*z);
        var n = { x : invlen * x, y : invlen * y, z : invlen * z };
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        var t = 1 - c;
        this.v[0] = t*n.x*n.x+c;
        this.v[1] = t*n.x*n.y + s*n.z;
        this.v[2] = t*n.x*n.z - s*n.y;
        this.v[4] = t*n.x*n.y - s*n.z;
        this.v[5] = t*n.y*n.y + c;
        this.v[6] = t*n.y*n.z + s*n.x;
        this.v[8] = t*n.x*n.z + s*n.y;
        this.v[9] = t*n.y*n.z - s*n.x;
        this.v[10] = t*n.z*n.z + c;
        this.v[12] = this.v[13] = this.v[14] = 0;
        return this;
    },

    invert: function(m){
        Matrix4x4f.invert(this.v, m.v);
        return this;
    },
    multiply : function(m) {
        Matrix4x4f.mul(this.v, m.v);
        return this;
    },

    makeInverseRigidBody : function(m) {
        var it0 = -m.v[12];
        var it1 = -m.v[13];
        var it2 = -m.v[14];

        this.v[12] = m.v[0] * it0 + m.v[1] * it1 + m.v[2] * it2;
        this.v[13] = m.v[4] * it0 + m.v[5] * it1 + m.v[6] * it2;
        this.v[14] = m.v[8] * it0 + m.v[9] * it1 + m.v[10] * it2;

        this.v[0] = m.v[0];
        this.v[1] = m.v[4];
        this.v[2] = m.v[8];
        this.v[4] = m.v[1];
        this.v[5] = m.v[5];
        this.v[6] = m.v[9];
        this.v[8] = m.v[2];
        this.v[9] = m.v[6];
        this.v[10] = m.v[10];

        return this;
    }
};

function Matrix4x4() {
    this.v = Matrix4x4f.create();
    Matrix4x4f.identity(this.v);
}

Matrix4x4.prototype = {

    make : function(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4, t1, t2, t3, t4) {
        this.v[0] = x1;
        this.v[1] = x2;
        this.v[2] = x3;
        this.v[3] = x4;
        this.v[4] = y1;
        this.v[5] = y2;
        this.v[6] = y3;
        this.v[7] = y4;
        this.v[8] = z1;
        this.v[9] = z2;
        this.v[10] = z3;
        this.v[11] = z4;
        this.v[12] = t1;
        this.v[13] = t2;
        this.v[14] = t3;
        this.v[15] = t4;
        return this;
    },

    makeIdentity : function() {
        return Matrix4x4f.identity(this.v);
    },

    makePerspective : function(fovy, aspect, znear, zfar) {
        var top = znear * Math.tan(fovy * Math.PI / 360.0);
        var bottom = -top;
        var left = bottom * aspect;
        var right = top * aspect;

        var X = 2*znear/(right-left);
        var Y = 2*znear/(top-bottom);
        var A = (right+left)/(right-left);
        var B = (top+bottom)/(top-bottom);
        var C = -(zfar+znear)/(zfar-znear);
        var D = -2*zfar*znear/(zfar-znear);

        this.make(X,0,0,0, 0,Y,0,0, A,B,C,-1, 0,0,D,0);
        return this;
    },
    setPerspective : function(fovy, aspect, znear, zfar) {
        var top = znear * Math.tan(fovy * Math.PI / 360.0);
        var bottom = -top;
        var left = bottom * aspect;
        var right = top * aspect;

        var X = 2*znear/(right-left);
        var Y = 2*znear/(top-bottom);
        var A = (right+left)/(right-left);
        var B = (top+bottom)/(top-bottom);
        var C = -(zfar+znear)/(zfar-znear);
        var D = -2*zfar*znear/(zfar-znear);

        //this.make(X,0,0,0, 0,Y,0,0, A,B,C,-1, 0,0,D,0);
        this.v[0] = X;
        //this.v[1] ;
        //this.v[2] ;
        //this.v[3]
        //this.v[4] 
        this.v[5] = Y;
        //this.v[6]
        //this.v[7]
        this.v[8] = A;
        this.v[9] = B;
        this.v[10] = C;
        //this.v[11]
        //this.v[12] 
        //this.v[13]
        //this.v[14] = D;
        //this.v[15]





        return this;
    },


    makeRotate : function(angle, x, y, z) {
        var invlen = 1 / Math.sqrt(x*x+y*y+z*z);
        var n = { x : invlen * x, y : invlen * y, z : invlen * z };
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        var t = 1 - c;
        this.v[0] = t*n.x*n.x+c;
        this.v[1] = t*n.x*n.y + s*n.z;
        this.v[2] = t*n.x*n.z - s*n.y;
        this.v[4] = t*n.x*n.y - s*n.z;
        this.v[5] = t*n.y*n.y + c;
        this.v[6] = t*n.y*n.z + s*n.x;
        this.v[8] = t*n.x*n.z + s*n.y;
        this.v[9] = t*n.y*n.z - s*n.x;
        this.v[10] = t*n.z*n.z + c;
        this.v[12] = this.v[13] = this.v[14] = 0;
        return this;
    },
       setRotate : function(angle, x, y, z) {
        var invlen = 1 / Math.sqrt(x*x+y*y+z*z);
        var n = { x : invlen * x, y : invlen * y, z : invlen * z };
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        var t = 1 - c;
        this.v[0] = t*n.x*n.x+c;
        this.v[1] = t*n.x*n.y + s*n.z;
        this.v[2] = t*n.x*n.z - s*n.y;
        this.v[4] = t*n.x*n.y - s*n.z;
        this.v[5] = t*n.y*n.y + c;
        this.v[6] = t*n.y*n.z + s*n.x;
        this.v[8] = t*n.x*n.z + s*n.y;
        this.v[9] = t*n.y*n.z - s*n.x;
        this.v[10] = t*n.z*n.z + c;
        this.v[12] = this.v[13] = this.v[14] = 0;
        return this;
    },

    invert: function(m){
        Matrix4x4f.invert(this.v, m.v);
        return this;
    },
    multiply : function(m) {
        Matrix4x4f.mul(this.v, m.v);
        return this;
    },

    makeInverseRigidBody : function(m) {
        var it0 = -m.v[12];
        var it1 = -m.v[13];
        var it2 = -m.v[14];

        this.v[12] = m.v[0] * it0 + m.v[1] * it1 + m.v[2] * it2;
        this.v[13] = m.v[4] * it0 + m.v[5] * it1 + m.v[6] * it2;
        this.v[14] = m.v[8] * it0 + m.v[9] * it1 + m.v[10] * it2;

        this.v[0] = m.v[0];
        this.v[1] = m.v[4];
        this.v[2] = m.v[8];
        this.v[4] = m.v[1];
        this.v[5] = m.v[5];
        this.v[6] = m.v[9];
        this.v[8] = m.v[2];
        this.v[9] = m.v[6];
        this.v[10] = m.v[10];

        return this;
    }

};


globalGLMatrixState = {
    modelMatrix : [ new Matrix4x4(), new Matrix4x4()],
    projectionMatrix : new Matrix4x4().makePerspective(45,1,1,10),
    viewMatrix : new Matrix4x4(),
    modelStackTop : 0
};

function modelMatrix() {
    return globalGLMatrixState.modelMatrix[globalGLMatrixState.modelStackTop];
    //return globalGLMatrixState.modelMatrix;
}

function projectionMatrix() {
    return globalGLMatrixState.projectionMatrix;
}

function viewMatrix() {
    return globalGLMatrixState.viewMatrix;
}

function pushModelMatrix() {
    globalGLMatrixState.modelStackTop++;
    if (globalGLMatrixState.modelStackTop == globalGLMatrixState.modelMatrix.length) {
        globalGLMatrixState.modelMatrix[globalGLMatrixState.modelMatrix.length] = new Matrix4x4();
    }
    var _top = globalGLMatrixState.modelMatrix[globalGLMatrixState.modelStackTop];
    var _parent = globalGLMatrixState.modelMatrix[globalGLMatrixState.modelStackTop-1];
    for (var j = 0; j < 16; ++j) {
        _top.v[j] = _parent.v[j];
    }
    return _top;
}

function popModelMatrix() {
    --globalGLMatrixState.modelStackTop;
}

function unproject(winx, winy, winz, modviewproj, viewport)
{
    winx = 2 * (winx - viewport[0])/viewport[2] - 1; 
    winy = 2 * (winy - viewport[1])/viewport[3] - 1; 
    winz = 2 * winz - 1;
    var invMat = new Matrix4x4;
    invMat.invert(modviewproj);
    var n = [winx,winy,winz,1]; 
    n = Vector4Df.mulmat(invMat.v,n,n); 
    return [n[0]/n[3],n[1]/n[3],n[2]/n[3],1];
}


